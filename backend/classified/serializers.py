from rest_framework import serializers
from .models import Classified

class ClassifiedSerializer(serializers.ModelSerializer):

	class Meta:
		model = Classified
		fields = ('id', 'title', 'description', 'date')