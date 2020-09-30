from data.models import Calendar
from api.serializers import CalendarSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import status

class CalendarList(APIView):
    """
        get:
            Return 'user' Calendar.

        post:
            Create a calendar.
    """
    permission_classes = (permissions.IsAuthenticated,)
    def get(self, request, user_id, format=None):
        calendars = Calendar.objects.get(user_id=user_id)
        serializer = CalendarSerializer(calendars)
        return Response(serializer.data)

    def post(self, request, format=None):
        # Maybe create calendar when the user is created.
        serializer = CalendarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
