from django.db import models

# Create your models here.
class Subscriptions(models.Model):
    name = models.CharField(max_length=255, blank=True)
    user = models.ForeignKey(models.ForeignKey)
    items = models.ManyToManyField(models.ForeignKey)
    
    
class Items(models.Model):
    pass

class Users(models.Model):
    pass