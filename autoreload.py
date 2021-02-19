import json
from time import sleep
import requests
from telegram import Bot, ParseMode

token = json.load(open('secret_data.json', 'r'))['tokens'][0]
kikos_id = int(json.load(open('secret_data.json', 'r'))['tg_kik0s_id'])
token_TG = json.load(open('secret_data.json', 'r'))['token_TG']

def send_error(message):
	bot = Bot(token_TG)
	bot.send_message(kikos_id, str(message))

def reload():
	r = requests.get('http://localhost:5000/admin/' + token + '/reload')
	if r.status_code == 200 and r.text == 'ok':
		return
	send_error('reload of kik0s.ru failed')

if __name__ == "__main__":
	while True:
		sleep(60)
		reload()
