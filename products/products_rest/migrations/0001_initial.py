# Generated by Django 4.0.3 on 2022-07-13 22:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product_Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=200)),
                ('picture_url', models.URLField()),
                ('product_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='products_rest.product_category')),
            ],
        ),
        migrations.CreateModel(
            name='Clothing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('color', models.CharField(blank=True, max_length=50, null=True)),
                ('size', models.CharField(blank=True, choices=[('1', 'Small'), ('2', 'Medium'), ('3', 'Large'), ('4', 'XLarge'), ('5', 'XXLarge')], default='3', max_length=8, null=True)),
                ('product_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='clothing', to='products_rest.product_category')),
            ],
        ),
    ]