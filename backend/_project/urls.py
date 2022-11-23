from django.contrib import admin
from django.urls import include, path
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)

urlpatterns = [
    path(
        "admin/",
        admin.site.urls,
    ),
    path(
        "api/",
        include("users.urls"),
    ),
    path(
        "api/",
        include("transactions.urls"),
    ),
    path(
        "api/",
        include("stores.urls"),
    ),
]
