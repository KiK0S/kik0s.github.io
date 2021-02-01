#!/bin/bash
python3 -m pip install -r requirements.txt
nohup python3 main.py >>logfile.log 2>>errfile.log </dev/null &
echo $! >>~/processes_web