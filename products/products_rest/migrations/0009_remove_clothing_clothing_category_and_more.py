# Generated by Django 4.0.3 on 2022-08-02 23:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products_rest', '0008_clothing'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='clothing',
            name='clothing_category',
        ),
        migrations.RemoveField(
            model_name='clothing_inventory',
            name='product_category',
        ),
        migrations.RemoveField(
            model_name='product',
            name='product_category',
        ),
        migrations.DeleteModel(
            name='Product_Category',
        ),
    ]
