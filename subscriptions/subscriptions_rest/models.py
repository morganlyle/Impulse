from django.db import models

# Create your models here.
class Subscriptions(models.Model):
    name = models.CharField(max_length=255, blank=True)
    user = models.ForeignKey(UserVO, related_name='user', on_delete=models.PROTECT)
       
    def __str__(self):
        return self.name

class ModelNumber(models.Model):
    pass
class ProductsBox(models.Model):
    item_name = models.CharField(max_length=255, blank=True)
    
    pass

class ClothingBox(models.Model):
    pass
class UserVO(models.Model):
    pass