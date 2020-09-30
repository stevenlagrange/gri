from django.contrib.auth.models import User, Group
from rest_framework import serializers
from data.models import Event, Post, Calendar, Profile


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('eid', 'title', 'description', 'start', 'end', 'created_by', 'address', 'city', 'country')


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer()

    class Meta:
        model = Post
        fields = ('pid', 'title', 'description', 'author', 'created_date')


class CalendarSerializer(serializers.ModelSerializer):
    events = EventSerializer(many=True, read_only=True)

    class Meta:
        model = Calendar
        fields = ('user', 'events')

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = ('user', 'bio', 'location', 'birth_date')
