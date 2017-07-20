from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.week_record, name='week_record'),
]
