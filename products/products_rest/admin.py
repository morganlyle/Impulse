from django.contrib import admin
from .models import Clothing, Clothing_Inventory, Product, Product_Inventory


admin.site.register(Product_Inventory)
admin.site.register(Product)
admin.site.register(Clothing)
admin.site.register(Clothing_Inventory)
