
lsoutput=$(ls ./venv 2> /dev/null)
lsReturnCode=$?
if [ ${lsReturnCode} == 0 ]; then 
    rm -r ./venv
fi

python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver



