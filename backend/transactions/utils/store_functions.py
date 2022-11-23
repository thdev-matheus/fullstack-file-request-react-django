def get_store_owner(trans_str: str):
    owner = trans_str[48:62]
    return owner.strip().title()


def get_store_name(trans_str: str):
    name = trans_str[62:]
    return name.strip().title()
