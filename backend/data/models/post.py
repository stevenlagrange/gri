from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    pid = models.AutoField(primary_key=True, help_text=('Unique post identifier.'))
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=140)
    description = models.CharField(max_length=140)
    path = models.CharField(max_length=256)
    created_date = models.DateTimeField(auto_now_add=True)
    edited_date = models.DateTimeField(auto_now_add=True)
    image_url = models.URLField(max_length=240, blank=True)

    def __str__(self):
        return self.title + ' by ' + str(self.user)

    class Meta:
        app_label = 'data'
