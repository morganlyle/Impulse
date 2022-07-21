from urllib import response
import django
import os
import sys
import time
import json
import requests


sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "subscriptions.settings")
django.setup()

from subscriptions_rest.models import ProductInventoryVO, ClothingInventoryVO


def get_product_inventory():
    response = requests.get("http://products:8000/api/product_inventory/")
    content = json.loads(response.content)
    for product in content['product_inventory']:
        ProductInventoryVO.objects.update_or_create(sku=product['sku'])


# def get_clothing_inventory():
#     response = requests.get('http://localhost:8080/api/clothing_inventory/')
#     content = json.loads(response.content)
#     for clothing in content['clothing_inventory']:
#         ClothingInventoryVO.objects.update_or_create(sku=clothing['sku'])


def poll():
    while True:
        try:
            print('Subscriptions poller polling for data')
            get_product_inventory()
            # get_clothing_inventory()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(20)


if __name__ == "__main__":
    poll()
