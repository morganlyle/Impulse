from django.contrib import admin
from .models import (
    Product, Product_Category, Clothing
)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    pass

admin.site.register(Product_Category)
admin.site.register(Clothing)