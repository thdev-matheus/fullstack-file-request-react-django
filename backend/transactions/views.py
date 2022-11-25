from datetime import datetime

import ipdb
from rest_framework import generics, permissions
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import Response, status
from transactions.utils.data_to_db import data_to_dict

from .models import Transaction
from .serializers import TransactionSerializer


class TransactionsViews(generics.CreateAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def create(self, request, *args, **kwargs):
        file_split = request.FILES["file"].read().decode().strip().split("\n")

        transactions = [data_to_dict(transaction) for transaction in file_split]
        serializer = self.get_serializer(data=transactions, many=True)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return Response({"message": "Success!"}, status.HTTP_202_ACCEPTED)
