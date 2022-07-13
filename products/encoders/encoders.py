from encoders.json import ModelEncoder

from products_rest.models import Product_Category, Product, Clothing

class ProductCategoryEncoder(ModelEncoder):
    model = Product_Category
    properties = [
        "category",
    ]

class ProductEncoder(ModelEncoder):
    model = Product
    properties = [
        "name",
        "description",
        "picture_url",
        "product_category",
    ]
    encoders = {
        "product_category": ProductCategoryEncoder(),
    }

class ClothingEncoder(ModelEncoder):
    model = Clothing
    properties = [
        "name",
        "color",
        "size",
        "product_category",
    ]
    encoders = {
        "product_category": ProductCategoryEncoder(),
    }

