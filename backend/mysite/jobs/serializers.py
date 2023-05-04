from rest_framework import serializers
from .models import Offer
from django.contrib.auth.models import User

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Offer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'username', 'email', 'date_joined') 
        model = User