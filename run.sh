#!/bin/bash
python3 -m pip install -r requirements.txt
python3 clean.py
nohup python3 main.py >>logfile.log 2>>errfile.log </dev/null &
echo "$! flask" >>~/processes_web
nohup ./caddy_linux_amd64_custom reverse-proxy --from kik0s.ru --to localhost:5000 &
echo "$! caddy" >>~/processes_web
nohup python3 autoreload.py >>logfile.log 2>>errfile.log </dev/null &
echo "$! healthcheck" >>~/processes_web