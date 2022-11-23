def get_cpf(trans_str: str):
    # trans_str[19:30]
    return (
        f"{trans_str[19:22]}.{trans_str[22:25]}.{trans_str[25:28]}-{trans_str[28:30]}"
    )
