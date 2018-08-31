from data.models import Event
from api.serializers import EventSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import status

class EventDetail(APIView):
    """
        get:
            Return all event of `eid`.

        put:
            Update event details.

        delete:
            Delete event {id}.
    """
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    def get_objects(self, id):
        try:
            return Event.objects.get(eid=id)
        except Event.DoesNotExist:
            raise Http404

    def get(self, request, eid, format=None):
        event = self.get_objects(eid)
        serializer = EventSerializer(event)
        return Response(serializer.data)

    def put(self, request, eid, format=None):
        event = self.get_objects(eid)
        serializer = EventSerializer(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, eid, format=None):
        event = self.get_objects(eid)
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
