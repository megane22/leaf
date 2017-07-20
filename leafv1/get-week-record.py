from leafv1.models import *

this_week = WeekRecord.objects.exclude(end_date__lte=timezone.now())[0]
print(this_week)