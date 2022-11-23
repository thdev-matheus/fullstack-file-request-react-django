def get_rounded_value(trans_str: str) -> float:
    return round(float(trans_str[9:19]) / 100, 2)
