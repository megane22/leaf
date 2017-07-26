from django.shortcuts import render
from django.utils import timezone
from .models import *

# Create your views here.
def week_record(request):
    this_week = WeekRecord.objects.exclude(end_date__lte=timezone.now())[0]
    tf_entries = this_week.tf_entries.all()
    return render(request, 'leafv1/week_record.html',
    {'week_record': this_week, 'tf_entries': tf_entries})

#load a page with all the stats being recorded for this week
#that has buttons for user to enter record for any subset of them
def day_record(request):
    this_week = WeekRecord.objects.exclude(end_date__lte=timezone.now())[0]
    tf_entries = this_week.tf_entries.all()
    return render(request, 'leafv1/day_record.html',
    {'tf_entries': tf_entries})

#see if we can catch the button's post request
def submit_record(request):
    print(request.body)
    week_record(request)
