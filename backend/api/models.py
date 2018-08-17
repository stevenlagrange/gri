from django.db import models
from django.contrib.auth.models import User


class Event(models.Model):
    eid = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=240)
    start = models.DateTimeField()
    end = models.DateTimeField()
    address = models.CharField(max_length=140, blank=True)
    city = models.CharField(max_length=40, blank=True)
    country = models.CharField(max_length=40, blank=True)
    image_url = models.URLField(max_length=240, blank=True)

    def __str__(self):
        return self.title + ' @' + str(self.start)

class Post(models.Model):
    pid = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    data = models.CharField(max_length=240)
    created_date = models.DateTimeField(auto_now_add=True)
    edited_date = models.DateTimeField(auto_now_add=True)
    image_url = models.URLField(max_length=240, blank=True)

    def __str__(self):
        return self.title + ' by ' + str(self.user)

class Calendar(models.Model):
    cid = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    events = models.ManyToManyField(Event)

    def __str__(self):
        return str(self.user) + "'s Calendar"
