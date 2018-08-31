from django.test import TestCase
from rest_framework.test import APIRequestFactory, APIClient
from data.models import Event

factory = APIRequestFactory()
client = APIClient()

basic_credentials = {'username': 'dev', 'password': 'goraceinfo'}
token = client.post('/api/v1/auth/token/obtain/', basic_credentials)
console.log(token)
