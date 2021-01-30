from rest_framework import viewsets
from .models import Classified
from .serializers import ClassifiedSerializer


class ClassifiedViewSet(viewsets.ModelViewSet):
	queryset = Classified.objects.all()
	serializer_class = ClassifiedSerializer
