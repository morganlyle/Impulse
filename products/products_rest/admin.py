from django.contrib import admin
from .models import (
    Clothing_Inventory, Product, Product_Category, Product_Inventory
)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    pass

admin.site.register(Product_Inventory)
admin.site.register(Product_Category)
admin.site.register(Clothing_Inventory)