from django.conf.urls import url, include
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    url(r'token/obtain/$', TokenObtainPairView.as_view()),
    url(r'token/refresh/$', TokenRefreshView.as_view()),
]
