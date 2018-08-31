from .base import *

'''
    Development Settings.
'''
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEBUG = True

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, '../database/v1.db'),
    }
}

SECURE_SSL_REDIRECT = False

CORS_ORIGIN_WHITELIST = (
    'http://localhost:8080',
)

CORS_ORIGIN_REGEX_WHITELIST = (
    'http://localhost:8080',
)
