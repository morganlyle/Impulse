from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .models import Product_Category, Product, Clothing

# Create your views here.


@require_http_methods(["GET", "POST"])
def api_product_category(request):
    if request.method == "GET":
        product_categories =  Product_Category.objects.all()
        return JsonResponse(
            {"product_categories": product_categories},
            
        )