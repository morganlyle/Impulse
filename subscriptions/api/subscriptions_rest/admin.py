from django.contrib import admin

from .models import (
    Subscription, 
    ProductsBox, 
    Receipt, 
    ClothingBox, 
    User, 
    ClothingInventoryVO, 
    ProductInventoryVO
)

# Register your models here.

admin.site.register(Subscription)
admin.site.register(ProductsBox)
admin.site.register(ClothingBox)
admin.site.register(User)
admin.site.register(ProductInventoryVO)
admin.site.register(ClothingInventoryVO)
admin.site.register(Receipt)