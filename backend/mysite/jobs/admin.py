from django.contrib import admin

# Register your models here.
from .models import Category, Offer


admin.site.register(Category)

admin.site.register(Offer)
