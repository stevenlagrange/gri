from django.conf.urls import url, include
from django.urls import path
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(TokenObtainPairSerializer, cls).get_token(user)
        token['name'] = user.id
        print(token)
        return token

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

urlpatterns = [
    url(r'token/obtain/$', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    url(r'token/refresh/$', TokenRefreshView.as_view(), name='token_refresh'),
    url(r'token/verify/$', TokenVerifyView.as_view(), name='token_verify'),
]
