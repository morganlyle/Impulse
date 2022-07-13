from django.db import models

# Create your models here.
# class Subscription(models.Model):

#     model_number = models.PositiveSmallIntegerField(max_length=20, unique = True)

#     price = models.PositiveBigIntegerField(max_length=30)

#     products = models.ForeignKey(ProductsBoxVO, related_name="products", on_delete=models.PROTECTS)

#     clothing = models.models.ForeignKey(

#     ClothingBoxVO, related_name='clothing', on_delete=models.PROTECT, null=True)

  

# class ProductsBoxVO(models.Model):

#     product_items = models.CharField(max_length = 200, unique = True)

# class ClothingBoxVO(models.Model):

#     clothing_items = models.CharField(max_length=200, unique = True)