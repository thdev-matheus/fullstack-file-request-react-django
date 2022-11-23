from datetime import datetime


def get_date(trans_str: str):
    date = datetime.strptime(
        f"{trans_str[1:5]}-{trans_str[5:7]}-{trans_str[7:9]}", "%Y-%m-%d"
    )
    return datetime.date(date)


def get_hour(trans_str: str):
    time = datetime.strptime(
        f"{trans_str[42:44]}:{trans_str[44:46]}:{trans_str[46:48]}", "%H:%M:%S"
    )
    return datetime.time(time)
