from django.urls import path
from .views import OfferDetail, OfferList, UserDetail, UserList


urlpatterns = [
    path('',OfferList.as_view()),
    path('<int:pk>/', OfferDetail.as_view()),
    path('users/', UserList.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
   
]