
from django.db import models
from django.urls import reverse
from uuid import uuid4


class Product_Category(models.Model):         #like manufacturer in Inventory models  in CC
    category = models.CharField(max_length=255)

    def get_api_url(self):
        return reverse("api_product_category", kwargs={"pk": self.id})

    # def __str__(self):
    #     return self.category


class Product(models.Model):        # analogous to Veh Mod in Inventory models in CarCar
    name = models.CharField(max_length=50)
    picture_url = models.URLField()

    product_category = models.ForeignKey(
        Product_Category,
        related_name="product_category",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_product", kwargs={"pk": self.id})

    # def __str__(self):
    #     return self.name


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

           # analogous to global Auto Inventory in CarCar
class Clothing_Inventory(models.Model):           # analogous to global Auto Inventory in CarCar
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
        null=True
    )

    product_category = models.ForeignKey(
        Product_Category,
        related_name="clothing_inventory",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_clothing_inventory", kwargs={"pk": self.sku})

    # def __str__(self):
    #     return self.name



    # from stack overflow:
# class Month(models.TextChoices):
#         JAN = "1", "JANUARY"
#         FEB = "2", "FEBRUARY"
#         MAR = "3", "MAR"
#         # (...)

#     month = models.CharField(
#         max_length=2,
#         choices=Month.choices,
#         default=Month.JAN
#     )



