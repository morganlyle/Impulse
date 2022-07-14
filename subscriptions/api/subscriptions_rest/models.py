from django.db import models

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
    clothing_items = models.ManyToManyField(ClothingInventoryVO, related_name="clothing")

    def __str__(self):
        return self.name

class ProductsBox(models.Model):
    name = models.CharField(max_length=100)
    product_items = models.ManyToManyField(ProductInventoryVO, related_name="products")

    def __str__(self):
        return self.name

class User(models.Model):
    username = models.CharField(max_length=16, unique=True)
    password = models.CharField(max_length=50)
    email = models.EmailField(max_length=250, unique = True)
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    subscriptions = models.BooleanField(default=False)
    address = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.username}, {self.email}'

class Subscription(models.Model):
    username = models.OneToOneField(User, related_name='subscription', on_delete=models.PROTECT, primary_key=True)
    model_number = models.PositiveSmallIntegerField(unique=True)
    price = models.PositiveSmallIntegerField(default=30)
    products = models.ForeignKey(ProductsBox, related_name='subscription', on_delete=models.PROTECT, null=True, blank=True)
    clothing = models.ForeignKey(ClothingBox, related_name='subscription', on_delete=models.PROTECT, null=True, blank=True)

    def __str__(self):
        return f'{self.username}, {self.model_number}'

class Receipt(models.Model):
    username = models.ForeignKey(User, related_name="receipt",
        on_delete=models.CASCADE)
    order_number = models.PositiveSmallIntegerField(unique=True)
    price = models.CharField(max_length=50, default = "$36.99")
    model_number = models.ForeignKey(Subscription, related_name="receipt", on_delete=models.CASCADE)
    description = models.CharField(max_length=255, default="Here are your items")

    def __str__(self):
        return f'{self.username}, {self.order_number}'



