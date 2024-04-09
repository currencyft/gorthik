npm install @heroicons/react
npm install @heroicons/react@v1

Creating Django project folder
mkdir django-projects
cd django-projects
mkdir gorthik
cd gorthik

python3 -m venv env

source gorthikenv/bin/activate

pip install django

django-admin --version 

django-admin startproject main

python manage.py migrate

python manage.py createsuperuser

username: gorthik
email address: gorthik.ask@gmail.com
password: codercoder

python3 manage.py runserver localhost:8999



#Install Postgres

brew install postgresql

brew services start postgresql@14

createuser -s postgres

connect to postgres db using pgadmin

Edit settings.py

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'gorthik',
        'USER': 'postgres',
        'PASSWORD': 'codercoder',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

Make the migrations now

pip install psycopg2
pip install psycopg2-binary

python manage.py makemigrations
python manage.py migrate