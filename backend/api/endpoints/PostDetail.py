from data.models import Post
from api.serializers import PostSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import status

class PostDetail(APIView):
    """
        get:
            Return specific post.

        put:
            Update specific post.

        delete:
            Delete post.
    """
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    def get_objects(self, id):
        try:
            return Post.objects.filter(id=id)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):
        post = self.get_objects(id)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def put(self, request, id, format=None):
        post = self.get_objects(id)
        serializer = PostSerializer(owner, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        post = self.get_objects(id)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
