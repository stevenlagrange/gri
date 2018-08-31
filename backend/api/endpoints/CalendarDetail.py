from data.models import Calendar, Event
from api.serializers import CalendarSerializer, EventSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import status

class CalendarDetail(APIView):
    """
        get:
            Return calendar.

        put:
            Update calendar details.

        delete:
            Delete calendar.
    """
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    def get_objects(self, id):
        try:
            return Calendar.objects.get(user_id=id)
        except Calendar.DoesNotExist:
            raise Http404

    def get(self, request, user_id, format=None):
        calendar = self.get_objects(user_id)
        print(calendar)
        serializer = CalendarSerializer(calendar)
        return Response(serializer.data)

    def post(self, request, user_id, eid, format=None):
        # Add 'event' to 'user' 'calendar'.
        calendar = self.get_objects(user_id)
        event = Event.objects.get(eid=eid)
        calendar.events.add(event)
        serializer = CalendarSerializer(calendar)
        return Response(serializer.data)


    def put(self, request, id, format=None):
        calendar = self.get_objects(id)
        serializer = CalendarSerializer(calendar, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        calendar = self.get_objects(id)
        calendar.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
