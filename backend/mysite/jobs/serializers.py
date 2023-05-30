from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from .models import Offer
from django.contrib.auth.models import User
from taggit.serializers import (TagListSerializerField,
                                TaggitSerializer)

class OfferSerializer(TaggitSerializer, serializers.ModelSerializer):

    tags = TagListSerializerField()
    
    class Meta:
        fields = '__all__'
        model = Offer

class UserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        fields = ('id', 'username', 'email', 'date_joined') 
        model = User