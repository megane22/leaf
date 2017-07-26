from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.week_record, name='week_record'),
    url(r'^record/$', views.day_record, name='day_record'),
    url(r'^submit_record/$', views.submit_record, name='submit_record'),
]
