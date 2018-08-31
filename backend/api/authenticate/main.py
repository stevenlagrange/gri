from django.conf.urls import url, include
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

urlpatterns = [
    url(r'token/obtain/$', obtain_jwt_token, name='token_obtain_pair'),
    url(r'token/refresh/$', refresh_jwt_token, name='token_refresh'),
    url(r'token/verify/$', verify_jwt_token, name='token_verify'),
]
