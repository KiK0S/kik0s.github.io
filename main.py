from markdown2 import Markdown
from flask import Flask, render_template, url_for
import os
import traceback 

app = Flask("KiKoS")
markdowner = Markdown()	


@app.route("/")
def hello():
    return "Hello World!"

@app.route("/<filename>")
def static_file(filename):
	try:
		with open('static/html/' + filename + '.html', 'r') as f:
			return render_template('longread.html', content=f.read())
	except:
		return "Not found!"

@app.route("/admin/reload")
def reload():
	for name in os.listdir('static/markdown'):
		if name.endswith('.md'):
			try:
				print(name)
				with open('static/markdown/' + name, 'r') as fin:
					with open('static/html/' + name[:-2] + 'html', 'w') as fout:
						fout.write(markdowner.convert(fin.read()))
			except:
                print(traceback.get_exc())
				return "error"

	return "ok"

if __name__ == "__main__":
    app.run(host='0.0.0.0')
