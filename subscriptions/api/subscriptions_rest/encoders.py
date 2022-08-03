from common.json import ModelEncoder
from .models import *

class UserEncoder(ModelEncoder):
    model = User
    properties = [
        'username', 
        'email', 
        'first_name', 
        'last_name', 
        'password', 
        'address',
        'id'
    ]

class ProductInventoryVoEncoder(ModelEncoder):
    model = ProductInventoryVO
    properties = ['sku', 'product', 'id']

class ClothingInventoryVOEncoder(ModelEncoder):
    model = ClothingInventoryVO
    properties = ['sku', 'product', 'id']

class ClothingBoxEncoder(ModelEncoder):
    model = ClothingBox
    properties = ['name', 'clothing_items', 'id']
    
    encoders = {
        'clothing_items': ClothingInventoryVOEncoder()
    }

class ProductBoxEncoder(ModelEncoder):
    model = ProductsBox
    properties = ['name', 'product_items', 'id']
    
    encoders = {
        'product_items': ProductInventoryVoEncoder()
    }

class SubscriptionEncoder(ModelEncoder):
    model = Subscription
    properties = [
        'username', 
        'model_number', 
        'price', 
        'products', 
        'clothing'
    ]
    
    encoders = {
        'username': UserEncoder(),
        'products': ProductBoxEncoder(),
        'clothing': ClothingBoxEncoder()
    }

class ReceiptEncoder(ModelEncoder):
    model = Receipt
    properties = [
        # 'firstname',
        # 'lastname',
        # 'username',
        'email',
        # 'address',
        # 'address2',
        # 'country',
        # 'state',
        # 'zip',
        # 'ordernumber',
        # 'price',
        # 'modelnumber',
    ]

    # properties = [
    #     'username', 
    #     'order_number', 
    #     'price', 
    #     'model_number', 
    #     'description'
    # ]
    
    # encoders = {
    #     'username': UserEncoder(),
    #     # 'modelnumber': SubscriptionEncoder()
    # }
