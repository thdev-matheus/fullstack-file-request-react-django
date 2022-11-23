import ipdb
from rest_framework import serializers

from transactions.utils.transaction_type_functions import transaction_kind_of_type

from .models import Transaction


class TransactionSerializer(serializers.ModelSerializer):
    kind = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Transaction

        fields = [
            "id",
            "type",
            "date",
            "value",
            "cpf",
            "card_number",
            "hour",
            "store",
            "kind",
        ]

        read_only_fields = [
            "id",
        ]

    def get_kind(self, obj: Transaction):
        return transaction_kind_of_type(obj.type)
