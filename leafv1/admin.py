from django.contrib import admin
from .models import TFCatalog, OACatalog, TFRecord, OARecord, WeekRecord

# Register your models here.
admin.site.register(TFCatalog)
admin.site.register(OACatalog)
admin.site.register(TFRecord)
admin.site.register(OARecord)
admin.site.register(WeekRecord)