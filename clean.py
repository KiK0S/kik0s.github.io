from os import system
from os.path import expanduser
home = expanduser("~")


with open(home + '/processes_web', 'r') as f:
	for line in f:
		try:
			pid = int(line.split()[0])
			system('kill -9 ' + str(pid))
			print('killed ' + str(pid))
		except:
			pass
system('echo "" >' + home + '/processes_web')