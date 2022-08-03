from django.contrib import admin
from .models import (
    Clothing, Clothing_Inventory, Product, Product_Inventory
)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    pass

admin.site.register(Product_Inventory)
admin.site.register(Clothing)
# admin.site.register(Product_Category)
admin.site.register(Clothing_Inventory)