from django.contrib import admin

from subscriptions.subscriptions_rest.models import Subscriptions, ProductsBox, Receipt, ClothingBox, User, ClothingInventoryVO, ProductInventoryVO

# Register your models here.

admin.site.register(Subscriptions)
admin.site.register(ProductsBox)
admin.site.register(ClothingBox)
admin.site.register(User)
admin.site.register(ProductInventoryVO)
admin.site.register(ClothingInventoryVO)
admin.site.register(Receipt)