# Generated by Django 2.0.7 on 2018-07-14 02:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Calendar',
            fields=[
                ('cid', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('eid', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=240)),
                ('address', models.CharField(blank=True, max_length=140)),
                ('city', models.CharField(blank=True, max_length=40)),
                ('country', models.CharField(blank=True, max_length=40)),
                ('start_date_time', models.DateTimeField()),
                ('end_date_time', models.DateTimeField(blank=True)),
                ('image_url', models.CharField(blank=True, max_length=240)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('pid', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('data', models.CharField(max_length=240)),
                ('post_date', models.DateTimeField(auto_now_add=True)),
                ('last_edited_date', models.DateTimeField(auto_now_add=True)),
                ('image_url', models.CharField(blank=True, max_length=240)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='calendar',
            name='events',
            field=models.ManyToManyField(to='api.Event'),
        ),
        migrations.AddField(
            model_name='calendar',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
