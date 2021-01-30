from rest_framework import routers
from classified.viewset import ClassifiedViewSet

router = routers.DefaultRouter()
router.register(r'jornal', ClassifiedViewSet)