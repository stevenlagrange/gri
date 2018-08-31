from data.models import Post
from api.serializers import PostSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import status

class PostList(APIView):
    """
        get:
            Return all `user` posts.

        post:
            Create a post.
    """
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    def get(self, request, user_id, format=None):
        posts = Post.objects.filter(user_id=user_id)
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, user_id, format=None):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
