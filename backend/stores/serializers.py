from functools import reduce

import ipdb
from rest_framework import serializers

from transactions.serializers import TransactionSerializer

from .models import Store


class StoreSerializer(serializers.ModelSerializer):
    balance = serializers.SerializerMethodField()
    transactions = TransactionSerializer(read_only=True, many=True)

    class Meta:
        model = Store

        fields = [
            "id",
            "name",
            "owner_name",
            "transactions",
            "balance",
        ]

        read_only_fields = [
            "id",
            "transactions",
            "balance",
        ]

    def get_balance(self, obj: Store):
        serializer = TransactionSerializer(obj.transactions, many=True)
        transactions = serializer.data
        values_transactions = [
            transaction["value"]
            if transaction["kind"] == "Entrada"
            else -transaction["value"]
            for transaction in transactions
        ]
        saldo = reduce(lambda acc, value: acc + value, values_transactions, 0)

        return round(saldo, 2)
