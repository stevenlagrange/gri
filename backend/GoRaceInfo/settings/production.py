from .base import *

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/

'''
    Production Settings
'''
DEBUG = False

ALLOWED_HOSTS = ['*']

if 'RDS_DB_NAME' in os.environ:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': os.environ['RDS_DB_NAME'],
            'USER': os.environ['RDS_USERNAME'],
            'PASSWORD': os.environ['RDS_PASSWORD'],
            'HOST': os.environ['RDS_HOSTNAME'],
            'PORT': os.environ['RDS_PORT'],
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(BASE_DIR, 'database/v1.db'),
        }
    }


SECURE_SSL_REDIRECT = True

CORS_ORIGIN_WHITELIST = (
    'https://goraceinfo.s3.bucket',
)

CORS_ORIGIN_REGEX_WHITELIST = (
    'https://goraceinfo.s3.bucket',
)
