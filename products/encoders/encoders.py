from encoders.json import ModelEncoder, UUIDEncoder

from products_rest.models import Product_Category, Product, Product_Inventory, Clothing_Inventory

class ProductCategoryEncoder(ModelEncoder):
    model = Product_Category
    properties = [
        "category",
    ]

class ProductEncoder(ModelEncoder):
    model = Product
    properties = [
        "name",
        "picture_url",
        "product_category",
    ]
    encoders = {
        "product_category": ProductCategoryEncoder(),
    }

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

class ClothingEncoder(ModelEncoder):
    model = Clothing_Inventory
    properties = [
        "name",
        "color",
        "size",
        "product_category",
    ]
    encoders = {
        "product_category": ProductCategoryEncoder(),
    }

