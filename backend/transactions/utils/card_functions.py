def get_card_number(trans_str: str):
    return f"{trans_str[30:34]}.{trans_str[34:38]}.{trans_str[38:42]}"
