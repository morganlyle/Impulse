from django.urls import path

from .views import (
    clothing_box_list,
    product_box_list
)

urlpatterns = [
    path('clothing_boxes/', clothing_box_list, name='clothing_boxes'),
    path('product_boxes/', product_box_list, name='product_boxes')
]
