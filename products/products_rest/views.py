from unicodedata import category
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .models import Clothing_Inventory, Product_Inventory, Product, Clothing
from encoders.encoders import ProductEncoder, ClothingEncoder, ClothingInventoryEncoder, ProductInventoryEncoder


@require_http_methods(["GET", "POST"])
def api_product(request):
    if request.method == "GET":
        products = Product.objects.all()
        return JsonResponse(
            {"products": products},
            encoder=ProductEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            product = Product.objects.create(**content)
            return JsonResponse(
                product,
                encoder=ProductEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the product"}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET", "POST"])
def api_clothing(request):
    if request.method == "GET":
        clothes = Clothing.objects.all()
        return JsonResponse(
            {"clothes": clothes},
            encoder=ClothingEncoder,
        )
    else:
        try:
            content = json.loads(request.body)

            clothing = Clothing.objects.create(**content)
            return JsonResponse(
                clothing,
                encoder=ClothingEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the clothing"}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET", "POST"])
def api_product_inventory(request):
    if request.method == "GET":
        product_inventory = Product_Inventory.objects.all()
        return JsonResponse(
            {"product_inventory": product_inventory},
            encoder=ProductInventoryEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            product_inventory = Product_Inventory.objects.create(**content)
            return JsonResponse(
                product_inventory,
                encoder=ProductInventoryEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the product inventory item"}
            )
            response.status_code = 400
            return response



@require_http_methods(["GET", "POST"])
def api_clothing_inventory(request):
    if request.method == "GET":
        clothings_inventory = Clothing_Inventory.objects.all()
        return JsonResponse(
            {"clothing_inventory": clothings_inventory},
            encoder=ClothingInventoryEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            content = {
                **content,
                # "product_category": Product_Category.objects.get(category=content["product_category"])
            }
            clothing_inventory = Clothing_Inventory.objects.create(**content)
            return JsonResponse(
                clothing_inventory,
                encoder=ClothingInventoryEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the article of clothing"}
            )
            response.status_code = 400
            return response
