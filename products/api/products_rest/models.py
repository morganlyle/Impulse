from django.db import models
# from django.urls import reverse

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)

