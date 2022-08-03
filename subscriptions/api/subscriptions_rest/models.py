import email
from django.db import models
from django.contrib.auth.models import AbstractUser
from uuid import uuid4

# Create your models here.
class ProductInventoryVO(models.Model):
    sku = models.PositiveSmallIntegerField(blank=True, null=True, unique=True)
    product = models.CharField(max_length=200, blank = True)

    def __str__(self):
        return self.product

class ClothingInventoryVO(models.Model):
    sku = models.PositiveSmallIntegerField(blank=True, null=True, unique=True)
    product = models.CharField(max_length=200, blank = True)

    def __str__(self):
        return self.product

class ClothingBox(models.Model):
    name = models.CharField(max_length=100)
    clothing_items = models.ManyToManyField(ClothingInventoryVO)

    def __str__(self):
        return self.name

class ProductsBox(models.Model):
    name = models.CharField(max_length=100)
    product_items = models.ManyToManyField(ProductInventoryVO)

    def __str__(self):
        return self.name

class User(AbstractUser):
    email = models.EmailField(max_length=250, unique=True)
    subscribed = models.BooleanField(default=False)
    address = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.email}'

class Subscription(models.Model):
    model_number = models.PositiveSmallIntegerField(unique=True, null=True)
    price = models.PositiveSmallIntegerField(default=30, null=True, blank=True)
    products = models.ForeignKey(ProductsBox, on_delete=models.PROTECT, null=True, blank=True)
    clothing = models.ForeignKey(ClothingBox, on_delete=models.PROTECT, null=True, blank=True)

    def __str__(self):
        return f'{self.model_number}'

class Receipt(models.Model):
    firstname = models.CharField(max_length=32)
    lastname = models.CharField(max_length=32)
    email = models.EmailField()
    address = models.CharField(max_length=254)
    address2 = models.CharField(max_length=254)
    country = models.CharField(max_length=254)
    state = models.CharField(max_length=254)
    username = models.CharField(max_length=254)
    ordernumber = models.PositiveSmallIntegerField(unique=True)
    price = models.CharField(max_length=50, default = "$36.99", null=True, blank= True)
    modelnumber = models.ForeignKey(Subscription,  on_delete=models.CASCADE)
    # description = models.CharField(max_length=255, default="Here are your items")

    def __str__(self):
        return f'{self.order_number}'
