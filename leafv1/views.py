from django.shortcuts import render
from django.utils import timezone
from .models import *

# Create your views here.
def week_record(request):
    this_week = WeekRecord.objects.exclude(end_date__lte=timezone.now())[0]
    tf_entries = this_week.tf_entries.all()
    print(tf_entries)
    return render(request, 'leafv1/week_record.html',
    {'week_record': this_week, 'tf_entries': tf_entries})
