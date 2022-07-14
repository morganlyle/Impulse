import json
from json import encoder
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods

from .encoders import (
    ProductInventoryVoEncoder,
    ProductBoxEncoder,
    ClothingInventoryVOEncoder,
    ClothingBoxEncoder
)

from subscriptions_rest.models import (
    ProductInventoryVO, 
    ClothingInventoryVO, 
    ClothingBox, 
    ProductsBox
)

# Create your views here.

@require_http_methods(['GET'])
def product_inventory_vo_list(request):
    if request.method == "GET":
        product_inventory_vos = ProductInventoryVO.all()
        return JsonResponse(
            {"product_inventory_vos": product_inventory_vos},
            encoder=ProductInventoryVoEncoder
        )

@require_http_methods(['GET', 'POST'])
def product_box_list(request):
    if request.method == "GET":
        product_boxes = ProductsBox.objects.all()
        return JsonResponse(
            {"product_boxes": product_boxes},
            encoder=ProductBoxEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            content = {
                **content,
                "product_box": ProductsBox.objects.get(pk=content['product_box'])
            }
            product_box = ProductsBox.objects.create(**content)
            return JsonResponse(
                product_box, 
                encoder=ProductBoxEncoder, 
                safe=False
            )
        except:
            response = JsonResponse(
                {"message": 'Could not create product box'}
            )
            return response

@require_http_methods(['GET', 'POST'])
def clothing_inventory_vo_list(request):
    if request.method == 'GET':
        clothing_inventory_vos = ClothingInventoryVO.objects.all()
        return JsonResponse(
            {'clothing_inventory_vos' : clothing_inventory_vos},
            encoder=ClothingInventoryVOEncoder
        )

@require_http_methods(['GET','POST'])
def clothing_box_list(request):
    if request.method == 'GET':
        clothing_box = ClothingBox.objects.all()
        return JsonResponse(
            {'clothing_box': clothing_box},
            encoder=ClothingBoxEncoder
        )
    else:
        content = json.loads(request.body)

        try:
            clothing_box = ClothingBox.objects.get(id=content['clothing_box'])
            content['clothing_box'] = clothing_box
        except ClothingBox.DoesNotExist:
            return JsonResponse(
                {'message': "invalid id"},
                status=400,
            )
        
        clothing_box = ClothingBox.objects.create(**content)
        return JsonResponse(
            clothing_box,
            encoder=ClothingBoxEncoder,
            safe=False
        )