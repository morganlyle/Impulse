from django.db import models
from django.urls import reverse
from uuid import uuid4


class Product(models.Model):
    name = models.CharField(max_length=50)
    picture_url = models.URLField()
    description = models.TextField(max_length=1024)

    def get_api_url(self):
        return reverse("api_product", kwargs={"pk": self.id})


class Clothing(models.Model):
    name = models.CharField(max_length=50)
    picture_url = models.URLField()
    description = models.TextField(max_length=1024)

    def get_api_url(self):
        return reverse("api_clothing", kwargs={"pk": self.id})


class Product_Inventory(models.Model):
    color = models.CharField(max_length=20)
    sku = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    description = models.CharField(max_length=200)
    product = models.ForeignKey(
        Product,
        related_name="product",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_product_inventory", kwargs={"pk": self.id})


class Clothing_Inventory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    color = models.CharField(max_length=50, blank=True, null=True)
    sku = models.UUIDField(primary_key=True, default=uuid4, editable=False)

    class size_choices(models.TextChoices):
        S = "Small"
        M = "Medium"
        L = "Large"
        XL = "XLarge"
        XX = "XXLarge"

    size = models.CharField(
        max_length=8,
        choices=size_choices.choices,
        default=size_choices.L,
        blank=True,
        null=True,
    )

    def get_api_url(self):
        return reverse("api_clothing_inventory", kwargs={"pk": self.sku})
