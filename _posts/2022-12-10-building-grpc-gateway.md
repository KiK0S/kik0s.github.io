---
layout: post
title: Building gateway for ML media services using Go
permalink: /media-api-grpc-gateway/
excerpt_separator: <!--more-->
categories: [programming-guide]
---

At [Neiro.ai](https://neiro.ai) we build Generative AI tools for personality cloning. We have **Text-to-Speech**, **Voice Conversion**, **LipSync** and other AI techs in one user-friendly web interface. We also provide an API for Business Customers.

Our machine-learning services are maintained by different engineering teams and have different APIs. We developed the gateway to monitor these services and wrap them into one convenient service.

<!--more-->

We need the gateway to meet the following requirements:

* **We need to process gRPC** requests coming from our mobile apps
* **We need to process REST** requests coming from our Web Studio
* All infrastructure **logic should be implemented once and for all** — rate limits, token verification, tracing, monitoring, and so on
* In most cases, requests **include media files: audio and video**. Depending on the case, we want to send either URL or binary file to the gateway.

As a startup, we want to move fast and decided to build a gateway using Go infrastructure.

We provide this article with a sample echo application. The source code can be found [here](https://github.com/mynalabsai/grpc_gateway_media_example).


```protobuf
// Service interface described in protobuf format

message EchoMessage {
 string name = 1;
 bytes data = 2;
}

service EchoService {
  rpc Echo(EchoMessage) returns (EchoMessage) {
    option (google.api.http) = {
      post: "/v1/echo"
      body: "*"
    };
  }
}
```


### Use both REST and gRPC
In order to fulfill the first requirement, we decided to use [gRPC-gateway](https://grpc-ecosystem.github.io/grpc-gateway/), which generates a proxy from JSON to protobuf object format and can redirect the rest request to the gRPC server.


![grpc-gateway-schema](https://miro.medium.com/v2/resize:fit:828/format:webp/1*lsyZlNLVBYIWTKEgKH_Zdw.png)

Here are three things we need to do:

* Add a handler from **gRPC-gateway** that will broadcast the request from **REST** to **gRPC**. It gets attached to `http.ServeMux`. Here's how it's done:

```go
// Mux will handle /v1/echo by proxying request to localhost:9090 grpc endpoint
mux := http.NewServeMux()
gwmux := runtime.NewServeMux()
err := pb.RegisterEchoServiceHandlerFromEndpoint(ctx, gwmux, "localhost:9090", []grpc.DialOption{grpc.WithTransportCredentials(insecure.NewCredentials())})
if err != nil {
	fmt.Printf("%v\\n", err)
	os.Exit(1)
}
mux.Handle("/v1/echo", gwmux)
```



* Start the gRPC server
* For the HTTP server, filter out `Content-type: application/grpc`, and send it directly to the gRPC-handler. We do this by using a [method](https://github.com/dhrp/grpc-rest-go-example/blob/c8a2400b9c778ac02eceaff8dd021b398ea4675d/server/main.go#L51) from [this](https://medium.com/@thatcher/why-choose-between-grpc-and-rest-bc0d351f2f84) article. The rest of the requests are processed with the existing `mux` and are assigned to **gRPC-gateway** proxy.


### Common logic
The redirect of the request to the desired ML service is a callback. It is called inside the shared wrapper. The shared wrapper handles the logic related to the infrastructure and is not influenced by request type.

In our example, the echo service callback waits for a second and then returns its input as a response. Wrapper measures the latency of callback and can be reused for other requests.

```protobuf
// By using the wrapper we can measure the duration for every type of requests
type EchoService struct {
	pb.UnimplementedEchoServiceServer
}

func (service *EchoService) Echo(ctx context.Context, in *pb.EchoMessage) (*pb.EchoMessage, error) {
	var res *pb.EchoMessage
	handler := func() {
		time.Sleep(time.Second)
		res = in
	}
	Process(handler, "echo")
	return res, nil
}

func Process(callback func(), label string) {
	fmt.Printf("got request of type %s\\n", label)
	start := time.Now()
	callback()
	fmt.Printf("it took %f seconds to process %s\\n", time.Since(start).Seconds(), label)
}
```


## Handle media files
Once you run **gRPC-gateway** with requests containing raw data in bytes, an error occurs.

```
# curl for HTTP endpoint
$ curl localhost:8080/v1/echo  -H "Content-Type: application/json" -d '{"name": "hello world", "data": "abacaba"}'

# {"name":"hello world", "data":"abacabY="}%
```


```
grpcurl for gRPC endpoint

$ grpcurl --plaintext -d @ localhost:9090  echoproto.EchoService.Echo
{"name": "hello world", "data": "abacaba"}

# Error invoking method "echoproto.EchoService.Echo": error getting request data: illegal base64 data at input byte 4
```

This is because `data` field type in our data model is `bytes`. It is impossible to transmit bytes in the JSON text format, which is why we use `base64` representation of the data. For it to work, we will pass `base64(abacaba)`, which is `YWJhY2FiYQ==`, instead of `abacaba` for field `data`


```
# This is an expected echo response for HTTP

$ curl localhost:8080/v1/echo  -H "Content-Type: application/json" -d '{"name": "hello world", "data": "YWJhY2FiYQ=="}'
# {"name":"hello world", "data":"YWJhY2FiYQ=="}
```

```
# This is an expected echo response for gRPC

$ grpcurl --plaintext -d @ localhost:9090  echoproto.EchoService.Echo
{"name":"hello world", "data":"YWJhY2FiYQ=="}

# {
#  "name": "hello world",
#  "data": "YWJhY2FiYQ=="
# }
```

Basically, if the goal is to transmit a media file in the request body while preserving the structure, we create a string with a `base64` representation of the file.

However, this string will be too long for an audio or a short video, which makes it inconvenient to work with JSON. Besides, the user must be able to manually check that the request will return a specific file. In the first iteration, we made a python script that encodes a file and outputs a line that needs to be explicitly copied to the right place in JSON. Besides being inconvenient, anyone who wants to make a request will need to have a script.

Another option is to support files via URLs in the API. We allow this option, but manual testing may be tricky: you need to send the audio to the object storage. We wanted an option to send a local file.

The perfect way to send files would be to support multipart/form-data requests. Yet, the **gRPC-gateway** ecosystem does not allow it. The authors [suggest](https://grpc-ecosystem.github.io/grpc-gateway/docs/mapping/binary_file_uploads/) handling file downloads separately. We are looking to make a request in the same format as before, but with sending files via multipart/form-data instead of explicitly sending them inside the structure with the request.

That’s why we arrived at the solution of using macros that suggest which string fields need to be additionally expanded through the base64 representation of a specified file.

```json
{
    "_comment": "Here is how our request looks like",
    "data": "$neiro",
    "name": "Neiro"
}
```

```
Now we can send request and specify local file
$ curl localhost:8080/v1/echo  -H "Content-Type: multipart/form-data" -F 'data=@request_macros.json' -F '$neiro=@Neiro.png'

# {"name":"Neiro","data":"iVBORw0KGgoAAAANSU...wcQIcmot4FPDwAAAABJRU5ErkJggg=="}% 
```

Here’s how to do such processing. First, we install middleware. After receiving multipart/form-data, middleware recursively parses the JSON with data and expands macros.

The new request follows the same path as before. This is how it looks in Go:


```go
// This is how we process multipart/form-data and expand macros

func getFormFile(r *http.Request, name string) ([]byte, error) {
    file, _, err := r.FormFile(name)
    if err != nil {
        return nil, fmt.Errorf("not found")
    }
    defer file.Close()
    buf := bytes.Buffer{}
    io.Copy(&buf, file)
    if err != nil {
        return nil, fmt.Errorf("error while reading form file")
    }
    return buf.Bytes(), nil
}

func expandMacros(jsonData map[string]interface{}, r *http.Request, res *map[string]interface{}) error {
    for name, val := range jsonData {
        if inner, isObject := val.(map[string]interface{}); isObject {
            (*res)[name] = map[string]interface{}{}
            resInner, _ := (*res)[name].(map[string]interface{})
            err := expandMacros(inner, r, &resInner)
            if err != nil {
                return err
            }
        } else if valStr, ok := val.(string); ok && strings.HasPrefix(valStr, "$") {
            data, err := getFormFile(r, valStr)
            if err != nil {
                return fmt.Errorf("can not get file %s", val.(string))
            }
            (*res)[name] = base64.StdEncoding.EncodeToString(data)
        } else {
            (*res)[name] = val
        }
    }
    return nil
}

func createRequestFromMultiPart(r *http.Request) (*http.Request, error) {
    json_data, err := getFormFile(r, "data")
    if err != nil {
        fmt.Printf("%v", err)
        return nil, err
    }
    rawJson := json.RawMessage(json_data)
    var decoded map[string]interface{}
    expanded := map[string]interface{}{}
    json.Unmarshal(rawJson, &decoded)
    err = expandMacros(decoded, r, &expanded)
    str, _ := json.Marshal(expanded)
    if err != nil {
        return nil, err
    }
    reader := bytes.NewReader(str)
    newR, err := http.NewRequest(http.MethodPost, r.URL.String(), reader)
    if err != nil {
        return nil, err
    }
    return newR, nil
}
```

And the handler is slightly updated:

```go
// Filter application/grpc for gRPC server, expand macros and use reverse proxy for the rest

func grpcHandlerFunc(grpcServer *grpc.Server, otherHandler http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        if r.ProtoMajor == 2 && strings.Contains(r.Header.Get("Content-Type"), "application/grpc") {
            grpcServer.ServeHTTP(w, r)
        } else {
            if strings.Contains(r.Header.Get("Content-Type"), "multipart/form-data") {
                newR, err := createRequestFromMultiPart(r)
                if err != nil {
                    w.WriteHeader(400)
                    return
                }
                otherHandler.ServeHTTP(w, newR)
            } else {
                otherHandler.ServeHTTP(w, r)
            }
        }
    })
}
```

## Conclusion
This is an overview of how we used **gRPC-gateway** to handle media files in our ML services.

We hope you enjoyed the ride and learned something useful for your projects. Once again, you can find full example in [our github](https://github.com/mynalabsai/grpc_gateway_media_example)

At [Neiro.ai](https://neiro.ai), we’re all about moving fast, and the gateway we built using Go infrastructure has allowed us to do just that. By using **gRPC-gateway**, we were able to fulfill our requirements to process both **gRPC** and **REST** requests, and share infrastructure logic for rate limits, token verification, tracing, monitoring, and more. We even found a neat workaround to handle media files by using macros expansion. If you’re in a similar boat, we highly recommend checking out **gRPC-gateway** as a solution. Thanks for reading, and stay tuned for more AI adventures.

