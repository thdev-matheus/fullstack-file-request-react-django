from django.urls import path

from . import views

urlpatterns = [
    path("users/", views.UserView.as_view()),
    path("login/", views.UserLoginView.as_view()),
]
