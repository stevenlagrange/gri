from api.models import Calendar
from api.serializers import CalendarSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class CalendarDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_objects(self, id):
        try:
            return Calendar.objects.filter(id=id)
        except Calendar.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):
        calendar = self.get_objects(id)
        serializer = CalendarSerializer(calendar, many=True)
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
