from django.test import TestCase
from django.contrib.auth.models import User
from data.models import Event, Post, Calendar

class EventTestCase(TestCase):
    def setUp(self):
        Event.objects.create(title="First Event", description="This is my first event description.", start="2013-02-01 22:48:45", end="2013-02-01 22:48:45")
        Event.objects.create(title="Second Event", description="Woah! Another event!", start="2013-02-01 22:48:45", end="2013-02-01 22:48:45")

    def test_get_by_title(self):
        """Can retrieve event by title."""
        e1 = Event.objects.get(title="First Event")
        e2 = Event.objects.get(title="Second Event")
        self.assertEqual(e1.description, "This is my first event description.")
        self.assertEqual(e2.description, "Woah! Another event!")

class PostTestCase(TestCase):
    def setUp(self):
        user = User.objects.create_user('john', 'lennon@thebeatles.com', 'johnpassword')
        Post.objects.create(user=user, title="My first post!", data="Here is my post data.")
        Post.objects.create(user=user, title="My second post!", data="Some more post data.")

    def test_get_by_id(self):
        """Can retrieve event by title."""
        p1 = Post.objects.get(pid=1)
        p2 = Post.objects.get(pid=2)
        self.assertEqual(p1.title, "My first post!")
        self.assertEqual(p2.title, "My second post!")

class CalendarTestCase(TestCase):
    def setUp(self):
        user = User.objects.create_user('john', 'lennon@thebeatles.com', 'johnpassword')
        Calendar.objects.create(user=user , events=1)

    def test_get_by_title(self):
        """Can retrieve event by title."""
        c1 = Calendar.objects.get(user=1)
        self.assertEqual(c1.events, 1)
