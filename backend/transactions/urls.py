from django.urls import path

from . import views

urlpatterns = [
    path(
        "transactions/",
        views.TransactionsViews.as_view(),
    ),
]
