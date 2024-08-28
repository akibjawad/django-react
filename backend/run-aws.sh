sudo apt update
sudo apt install python3-pip python3-dev libpq-dev nginx curl
sudo apt install python3-venv

lsoutput=$(ls ./venv 2> /dev/null)
lsReturnCode=$?
if [ $lsReturnCode == 0 ]; then 
    rm -r ./venv
fi
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

python3 manage.py makemigrations
python3 manage.py migrate

python manage.py collectstatic

pip install gunicorn

sudo cp ./gunicorn.socket /etc/systemd/system/gunicorn.socket
sudo cp ./gunicorn.service /etc/systemd/system/gunicorn.service


sudo systemctl start gunicorn.socket
sudo systemctl enable gunicorn.socket

sudo systemctl daemon-reload
sudo systemctl restart gunicorn




sudo echo "${NGINX_CONFIG}" > /etc/nginx/sites-available/backend

sudo cp nginx_sites_enabled.config /etc/nginx/sites-available/backend

sudo ln -s /etc/nginx/sites-available/backend /etc/nginx/sites-enabled
sudo nginx -t
sudo systemctl restart nginx


