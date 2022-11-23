import ipdb
from rest_framework import generics, permissions, views
from rest_framework.authentication import TokenAuthentication

from .models import Store
from .serializers import StoreSerializer


class StoreView(generics.ListAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = Store.objects.all()
    serializer_class = StoreSerializer


class StoreDetailView(generics.RetrieveAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
    lookup_url_kwarg = "store_name"

    def retrieve(self, request, *args, **kwargs):
        store = self.get_queryset().filter(name=kwargs["store_name"])

        if not store:
            return views.Response(
                {"detail": "not found"}, views.status.HTTP_404_NOT_FOUND
            )

        serializer = self.get_serializer(store[0])
        return views.Response(serializer.data)
