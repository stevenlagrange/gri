from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from api.endpoints.CalendarList import CalendarList
from api.endpoints.CalendarDetail import CalendarDetail
from api.endpoints.EventDetail import EventDetail
from api.endpoints.EventList import EventList
from api.endpoints.PostDetail import PostDetail
from api.endpoints.PostList import PostList

urlpatterns = [
    url(r'events/$', EventList.as_view()),
    url(r'events/(?P<pk>[0-9]+)/$', EventDetail.as_view()),
    url(r'posts/$', PostList.as_view()),
    url(r'posts/(?P<pk>[0-9]+)/$', PostDetail.as_view()),
    url(r'calendars/$', CalendarList.as_view()),
    url(r'calendars/(?P<pk>[0-9]+)/$', CalendarDetail.as_view()),
]


urlpatterns = format_suffix_patterns(urlpatterns)
