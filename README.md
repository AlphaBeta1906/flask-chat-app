# chat-app

a simple chat website build using python flask,socketio and mysql as database

### How to run 
```bash
git clone https://github.com/AlphaBeta1906/flask-chat-app
cd flask-chat-app
virtualenv venv # use pip install virtualenv
. venv/bin/activate # venv/scripts/activate for windows

pip install -r requiremenst.txt
flask db migrate # to migrate create table in database
python wsgi.py
```