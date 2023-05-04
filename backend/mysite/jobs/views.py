from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Offer
from django.contrib.auth.models import User
from .serializers import OfferSerializer, UserSerializer
# Create your views here.

class OfferList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer

class OfferDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = User.objects.all()
    serializer_class = UserSerializer
