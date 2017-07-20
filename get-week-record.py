#setup Django
import os, datetime
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings")
import django
django.setup()

#bring in my models
from leafv1.models import *

#get this week's record and catalog entries
this_week = WeekRecord.objects.exclude(end_date__lte=timezone.now())[0]
tf_entries = this_week.tf_entries.all()
oa_entries = this_week.oa_entries.all()

#gather all the lines for each type of entry (e.g., Joy, Fulfillment)
for tf_type in tf_entries:
	display_name = tf_type.display_name
	line = display_name

	#go through each of the days to see if there was a rating for this T/F
	day_offset = 0
	while day_offset < 10:
		curr_date = this_week.start_date + datetime.timedelta(days=day_offset)
		record_for_date = TFRecord.objects.filter(catalog_entry__display_name=display_name)\
		.filter(recorded_date__date=curr_date)

		if not record_for_date:
			line = line + "," + "*"
		else:
			line = line + "," + str(record_for_date[0].rating)

		#don't forget to go up to the next day!
		day_offset += 1

	print(line)
