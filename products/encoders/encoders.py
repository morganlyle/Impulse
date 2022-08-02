from encoders.json import ModelEncoder, UUIDEncoder

from products_rest.models import Product, Clothing, Product_Inventory, Clothing_Inventory

# class ProductCategoryEncoder(ModelEncoder):
#     model = Product_Category
#     properties = [
#         "category",
#     ]

class ProductEncoder(ModelEncoder):
    model = Product
    properties = [
        "name",
        "picture_url",
        "description"
        # "product_category",
    ]
    # encoders = {
    #     "product_category": ProductCategoryEncoder(),
    # }

class ClothingEncoder(ModelEncoder):
    model = Clothing
    properties = [
        "name",
        "picture_url",
        "description",
    ]

class ProductInventoryEncoder(ModelEncoder):
    model = Product_Inventory
    properties = [
        "color",
        "sku",
        "description",
        "product",
    ]
    encoders = {
        "product": ProductEncoder(),
        "sku": UUIDEncoder(),
    }

class ClothingInventoryEncoder(ModelEncoder):
    model = Clothing_Inventory
    properties = [
        "name",
        "color",
        "size",
        # "product_category",
    ]
    # encoders = {
    #     "product_category": ProductCategoryEncoder(),
    # }

