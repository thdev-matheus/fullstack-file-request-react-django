import ipdb

from stores.models import Store
from stores.serializers import StoreSerializer
from transactions.utils import (
    find_transaction_type,
    get_card_number,
    get_cpf,
    get_date,
    get_hour,
    get_rounded_value,
    get_store_name,
    get_store_owner,
)


def data_to_dict(trans_str: str) -> dict:
    type = find_transaction_type(int(trans_str[0]))
    date = get_date(trans_str)
    value = get_rounded_value(trans_str)
    cpf = get_cpf(trans_str)
    card_number = get_card_number(trans_str)
    hour = get_hour(trans_str)
    store_data = {
        "name": get_store_name(trans_str),
        "owner_name": get_store_owner(trans_str),
    }

    # store_serializer = StoreSerializer(data=store_data)
    # store_serializer.is_valid(raise_exception=True)
    # store_serializer.save()

    store, _ = Store.objects.get_or_create(**store_data)

    return {
        "type": type,
        "date": date,
        "value": value,
        "cpf": cpf,
        "card_number": card_number,
        "hour": hour,
        "store": store.id,
    }
