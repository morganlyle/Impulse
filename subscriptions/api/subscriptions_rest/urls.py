from django.urls import path

from .views import (
    clothing_box_list,
    clothing_box_detail,
    product_box_list,
    product_boxes_detail,
    subscriptions_list,
    users_list,
    user_details,
    receipts_list,
    show_receipt,
    api_user_token,   
)

urlpatterns = [
    path('clothing_boxes/', clothing_box_list, name='clothing_boxes'),
    path('clothing_boxes/<int:pk>/', clothing_box_detail, name='clothing_box_detail'),
    path('product_boxes/', product_box_list, name='product_boxes'),
    path('product_boxes/<int:pk>/', product_boxes_detail, name='product_boxes_detail'),
    path('subscriptions/', subscriptions_list, name='subscriptions_list'),
    path('receipts/<int:pk>/', show_receipt, name='show_receipt'),
    path('receipts/', receipts_list, name='receipt_list'),
    path('users/<int:pk>/', user_details, name='users_detail'),
    path('users/', users_list, name='users_list'),
    path('tokens/mine/', api_user_token, name="api_user_token"),
]
