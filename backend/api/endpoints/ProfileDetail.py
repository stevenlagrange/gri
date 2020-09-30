from data.models import Profile
from api.serializers import ProfileSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import status

class ProfileDetail(APIView):
    """
        get:
            Return user profile information.

        put:
            Update user profile.

        delete:
            Delete profile.
    """
    permission_classes = (permissions.IsAuthenticated,)
    def get_objects(self, id):
        try:
            return Profile.objects.get(user_id=id)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, user_id, format=None):
        profile = self.get_objects(user_id)
        print(profile)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def put(self, request, user_id, format=None):
        profile = self.get_objects(user_id)
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, user_id, format=None):
        profile = self.get_objects(id)
        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
