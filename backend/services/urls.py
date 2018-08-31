from django.conf.urls import url, include
from django.urls import path
from services.views import login, register

urlpatterns = [
    url(r'login/$', login),
    url(r'register/$', register),
]
