from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
class Offer(models.Model):
    name = models.CharField(max_length=150)
    salary = models.CharField(max_length=30)
    location = models.CharField(max_length=50)
    contact = models.CharField(max_length=12)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.SET('INNA'))
    description = models.TextField()
    tags = models.CharField(max_length=200, default="")
    company_name = models.CharField(max_length=200, default="")

    def __str__(self):
        return self.name