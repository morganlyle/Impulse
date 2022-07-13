from django.db import models
from django.urls import reverse

# Create your models here.

class Product_Category(models.Model):         #like manufacturer in Inventory models  in CC
    category = models.CharField(max_length=255)

    def get_api_url(self):
        return reverse("api_product_category", kwarges={"pk": self.id})

    def __str__(self):
        return self.category


class Product(models.Model):        # analogous to Veh Mod in Inventory models in CarCar
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    picture_url = models.URLField()

    product_category = models.ForeignKey(
        Product_Category,
        related_name="products",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_product", kwargs={"pk": self.id})

    def __str__(self):
        return self.name

    #make a relaish to Prod Cat

class Clothing(models.Model):           # analogous to global Auto Inventory in CarCar
    name = models.CharField(max_length=100, unique=True)
    color = models.CharField(max_length=50, blank=True, null=True)

    class size_choices(models.TextChoices):
        S = "1", "Small"
        M = "2", "Medium"
        L = "3", "Large"
        XL = "4", "XLarge"
        XX = "5", "XXLarge"

    size = models.TextChoices(
        max_length=8,
        choices=size_choices.choices,
        default=size_choices.L,
        blank=True,
        null=True
    )

    product_category = models.ForeignKey(
        Product_Category,
        related_name="clothing",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_clothing", kwargs={"pk": self.id})

    def __str__(self):
        return self.name

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

        #unit_id = # a unique SKU
        pass



