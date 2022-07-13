from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .models import Product_Category, Product, Clothing
from encoders.encoders import ProductCategoryEncoder, ProductEncoder, ClothingEncoder

# Create your views here.


@require_http_methods(["GET", "POST"])
def api_product_category(request):
    if request.method == "GET":
        product_categories =  Product_Category.objects.all()
        return JsonResponse(
            {"product_categories": product_categories},
            encoder=ProductCategoryEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            category = content["category"]
            return JsonResponse(
                product_categories,
                encoder=ProductCategoryEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the product category"}
            )
            response.status_code = 400
            return response