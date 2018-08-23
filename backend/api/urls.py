from django.conf.urls import url, include
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.documentation import include_docs_urls

from api.views import login
from api.endpoints.CalendarList import CalendarList
from api.endpoints.CalendarDetail import CalendarDetail
from api.endpoints.EventDetail import EventDetail
from api.endpoints.EventList import EventList
from api.endpoints.PostDetail import PostDetail
from api.endpoints.PostList import PostList

urlpatterns = [
    url(r'login/$', login),
    url(r'events/$', EventList.as_view()),
    url(r'events/(?P<pk>[0-9]+)/$', EventDetail.as_view()),
    url(r'posts/$', PostList.as_view()),
    url(r'posts/(?P<pk>[0-9]+)/$', PostDetail.as_view()),
    url(r'calendars/$', CalendarList.as_view()),
    url(r'calendars/(?P<pk>[0-9]+)/$', CalendarDetail.as_view()),
    url(r'^docs/', include_docs_urls(title='GoRaceInfo')),
    url(r'^auth/', include('api.authenticate')),
]


urlpatterns = format_suffix_patterns(urlpatterns)
