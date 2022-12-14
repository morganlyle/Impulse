from django.urls import path

from .views import (
    api_product,
    api_clothing,
    api_product_inventory,
    api_clothing_inventory,
)

urlpatterns = [
    path("products/", api_product, name="api_product"),
    path("clothing/", api_clothing, name="api_clothing"),
    path("product_inventory/", api_product_inventory, name="api_product_inventory"),
    path("clothing_inventory/", api_clothing_inventory, name="api_clothing_inventory"),
]
