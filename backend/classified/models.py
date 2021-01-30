from django.db import models

# Create your models here.

class Classified(models.Model):

	title = models.CharField(max_length=50, blank=False)
	description = models.CharField(max_length=255, blank=False)
	date = models.DateField(auto_now_add=True)