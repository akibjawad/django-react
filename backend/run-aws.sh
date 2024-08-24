sudo apt update
sudo apt install python3-pip python3-dev libpq-dev nginx curl
sudo apt install python3-venv

lsoutput=$(ls ./venv 2> /dev/null)
lsReturnCode=$?
if [ $lsReturnCode != 0 ]; then 
    rm -r ./venv
fi
source venv/bin/activate
pip install -r requirements.txt

python3 manage.py makemigrations
python3 manage.py migrate

python manage.py collectstatic

pip install gunicorn

 
NGINX_CONFIG="server {
    listen 80;
    server_name 34.216.141.140;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /home/ubuntu/django-react/backend/static/;
    }

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}"

echo "$CONTENT" | sudo tee /etc/nginx/sites-available/backend


