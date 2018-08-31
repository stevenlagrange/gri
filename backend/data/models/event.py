from django.db import models
from django.contrib.auth.models import User

class Event(models.Model):
    eid = models.AutoField(primary_key=True, help_text=('Unique event identifier.'))
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=240)
    start = models.DateTimeField()
    end = models.DateTimeField()
    address = models.CharField(max_length=140, blank=True)
    city = models.CharField(max_length=40, blank=True)
    country = models.CharField(max_length=40, blank=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    image_url = models.URLField(max_length=240, blank=True)

    def __str__(self):
        return self.title + ' @' + str(self.start)

    class Meta:
        app_label = 'data'
