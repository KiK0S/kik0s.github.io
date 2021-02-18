from markdown2 import Markdown
from flask import Flask, render_template, url_for, request
import os
import traceback 
import requests
import json
from telegram import Bot, ParseMode
from os import system

app = Flask("KiKoS")
markdowner = Markdown() 

token_TG = json.load(open('secret_data.json', 'r'))['token_TG']
channel_ID = int(json.load(open('secret_data.json', 'r'))['channel_ID'])

def send_text(text):
    bot = Bot(token_TG)
    bot.send_message(channel_ID, text)

def send_photo(photo, caption_ = ''):
    bot = Bot(token_TG)
    bot.send_photo(channel_ID, photo, caption = caption_, parse_mode=ParseMode.HTML)

@app.route("/admin/telegram", methods=['POST'])
def index():
    received_json_data=json.loads(request.data.decode('utf-8'))
    if received_json_data['type'] == 'confirmation':
        return '57be742b'
    elif received_json_data['type'] == 'wall_post_new':
        text = ''
        if 'text' in received_json_data['object']:
            text = received_json_data['object']['text']
        photo_url = ''
        try:
            if 'attachments' in received_json_data['object']:
                best_photo_size = ['photo_1280', 'photo_807', 'photo_604', 'photo_75']
                photo = received_json_data['object']['attachments'][0]['photo']
                for c in best_photo_size:
                    if c in photo:
                        photo_url = photo[c]
                        break
        except:
            pass
        if photo_url == '':
            send_text(text)
        else:
            send_text(text)
            try:
                send_photo(photo_url, caption_ = 'Комментировать лучше в дискасс @chat_27325')
            except:
                pass

@app.route("/<filename>")
def static_file(filename):
    try:
        with open('static/html/' + filename + '.html', 'r') as f:
            title = next(f)
            return render_template('longread.html', content=title + f.read(), title=title[4:-6])
    except:
        traceback.print_exc()
        return "Not found!"


@app.route("/")
def hello():
    return static_file('index')

@app.route("/admin/reload")
def reload():
    for name in os.listdir('static/markdown'):
        if name.endswith('.md'):
            try:
                print(name)
                with open('static/markdown/' + name, 'r+') as fin:
                    with open('static/html/' + name[:-2] + 'html', 'w+') as fout:
                       print(markdowner.convert(fin.read()), file=fout)
            except:
                traceback.print_exc()
                return "error"

    return "ok"

if __name__ == "__main__":
    app.run()
