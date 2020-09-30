from django.conf.urls import url, include
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.documentation import include_docs_urls

from api.endpoints.CalendarList import CalendarList
from api.endpoints.CalendarDetail import CalendarDetail
from api.endpoints.EventDetail import EventDetail
from api.endpoints.EventList import EventList
from api.endpoints.PostDetail import PostDetail
from api.endpoints.PostList import PostList
from api.endpoints.ProfileDetail import ProfileDetail

urlpatterns = [
    url(r'calendars/(?P<user_id>[0-9]+)/$', CalendarList.as_view(), name='user_calendar'),
    url(r'calendars/(?P<user_id>[0-9]+)/(?P<eid>[0-9]+)/$', CalendarDetail.as_view(), name='user_calendar_event'),
    url(r'events/$', EventList.as_view(), name='all_events'),
    url(r'events/(?P<eid>[0-9]+)/$', EventDetail.as_view(), name='event_detail'),
    url(r'posts/(?P<user_id>[0-9]+)/$', PostList.as_view(), name='user_posts'),
    url(r'posts/(?P<user_id>[0-9]+)/(?P<pid>[0-9]+)/$', PostDetail.as_view(), name='post_detail'),
    url(r'profiles/(?P<user_id>[0-9]+)/$', ProfileDetail.as_view(), name='profile_detail'),
    url(r'^docs/', include_docs_urls(title='GoRaceInfo'), name='docs'),
    url(r'^auth/', include('api.authenticate.main'), name='authenticate'),
]


urlpatterns = format_suffix_patterns(urlpatterns)
