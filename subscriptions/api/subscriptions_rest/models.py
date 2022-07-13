from django.db import models

# Create your models here.
class ProductInventoryVO(models.Model):
    sku = models.PositiveSmallIntegerField(max_length=50, blank = True)
    product = models.CharField(max_length=200, blank = True)
class ClothingInventoryVO(models.Model):
    sku = models.PositiveSmallIntegerField(max_length=50, blank = True)
    product = models.CharField(max_length=200, blank = True)
class ClothingBox(models.Model):
    name = models.CharField(max_length=100, blank = True)
    clothing_items = models.ManyToManyField(ClothingInventoryVO, related_name="clothing")
class ProductsBox(models.Model):
    name = models.CharField(max_length=100, blank = True)
    product_items = models.ManyToManyField(ProductInventoryVO, related_name="products")
class User(models.Model):
    username = models.CharField(max_length=50, unique= True)
    password = models.CharField(max_length=50)
    email = models.EmailField(max_length=250, unique = True)
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    subscriptions = models.BooleanField(default=False)
    address = models.CharField(max_length=200)
class Subscription(models.Model):
    username = models.ForeignKey(User, related_name="subscription", on_delete=models.PROTECT, unique=True)
    model_number = models.PositiveSmallIntegerField(max_length=20, unique = True)
    price = models.PositiveSmallIntegerField(default=30)
    products = models.ForeignKey(ProductsBox, related_name="subscription", on_delete=models.PROTECT, null=True, blank=True)
    clothing = models.ForeignKey(ClothingBox, related_name='subscription', on_delete=models.PROTECT, null=True, blank=True)
class Receipt(models.Model):
    username = models.ForeignKey(User, related_name="receipt",
        on_delete=models.CASCADE)
    order_number = models.PositiveSmallIntegerField(max_length=200, unique = True)
    price = models.CharField(max_length=50, default = "$36.99")
    model_number = models.ForeignKey(Subscription, related_name="receipt", on_delete=models.PROTECT)
    description = models.CharField(max_length=255, default="Here are your items")



