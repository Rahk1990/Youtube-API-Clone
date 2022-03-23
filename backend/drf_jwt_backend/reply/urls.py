from django.urls import path, include
from reply import views

urlpatterns = [
    path('<int:comment_id>/', views.user_reply),
]