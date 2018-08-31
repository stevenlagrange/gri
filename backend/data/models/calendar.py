from django.db import models
from django.contrib.auth.models import User
from data.models.event import Event

class Calendar(models.Model):
    cid = models.AutoField(primary_key=True, help_text=('Unique calendar identifier.'))
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    events = models.ManyToManyField(Event)

    def __str__(self):
        return str(self.user) + "'s Calendar"

    class Meta:
        app_label = 'data'
