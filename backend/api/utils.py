from api.serializers import UserSerializer


def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'access_token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }
