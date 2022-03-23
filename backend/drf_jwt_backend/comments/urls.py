from django.urls import path, include
from comments import views

urlpatterns = [
    path('all/', views.comments_list),
    path('<int:pk>/', views.user_comments)
]