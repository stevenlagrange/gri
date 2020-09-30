from data.models import Post
from api.serializers import PostSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import status

class PostDetail(APIView):
    """
        Return a detailed response.

        get:
            Return specific post.

        put:
            Update specific post.

        delete:
            Delete post.
    """
    permission_classes = (permissions.IsAuthenticated,)
    def get_objects(self, uid, pid):
        try:
            return Post.objects.get(author_id=uid, pid=pid)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request, user_id, pid, format=None):
        post = self.get_objects(user_id, pid)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def put(self, request, user_id, pid, format=None):
        post = self.get_objects(user_id, pid)
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, user_id, pid, format=None):
        post = self.get_objects(user_id, pid)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
