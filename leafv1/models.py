from django.db import models
from django.utils import timezone

# A template for a catalog entry (anything that ever gets recorded)
class CatalogEntry(models.Model):
	display_name = models.CharField(max_length=50)
	full_name = models.TextField()
	created_date = models.DateTimeField(default=timezone.now)
	#TODO: Color for representing this in the UI? could be good to be consistent

	def __str__(self):
		return self.display_name

# A catalog entry for a thought or feeling
class TFCatalog(CatalogEntry):
	pass

# A catalog entry for an overt action (RO-DBT skill or otherwise)
class OACatalog(CatalogEntry):
	description = models.TextField(blank=True, null=True)
	ro_number = models.CharField(max_length=5, blank=True, null=True)

#A template for any type of record 
class DailyRecord(models.Model):
	recorded_date = models.DateTimeField(default=timezone.now)
	modified_date = models.DateTimeField(blank=True, null=True)

	def make_record(self):
		modified_date = timezone.now()
		self.save()

#An individual record of the rating for a thought or feeling
class TFRecord(DailyRecord):
	catalog_entry = models.ForeignKey(TFCatalog, on_delete=models.CASCADE)
	rating = models.IntegerField(default=0)
	comments = models.TextField(blank=True)

	def __str__(self):
		return self.catalog_entry.display_name + " " + self.recorded_date.isoformat()

#An individual record of taking an overt action
class OARecord(DailyRecord):
	catalog_entry = models.ForeignKey(OACatalog, on_delete=models.CASCADE)
	comments = models.TextField(blank=True)

	def __str__(self):
		return self.catalog_entry.display_name + " " + self.recorded_date.isoformat()

#A reference for which fields are being recorded in a week
class WeekRecord(models.Model):
	start_date = models.DateField()
	end_date = models.DateField()
	tf_entries = models.ManyToManyField(TFCatalog)
	oa_entries = models.ManyToManyField(OACatalog)
	valued_goals = models.TextField(blank=True)
	self_enquiry = models.TextField(blank=True)
	notes = models.TextField(blank=True)

	def __str__(self):
		return self.start_date.isoformat()