from transactions.models import TransactionType


def find_transaction_type(num: int) -> str:
    if num == 1:
        return TransactionType.DEBITO
    elif num == 2:
        return TransactionType.BOLETO
    elif num == 3:
        return TransactionType.FINANCIAMENTO
    elif num == 4:
        return TransactionType.CREDITO
    elif num == 5:
        return TransactionType.RECEBIMENTO_EMPRESTIMO
    elif num == 6:
        return TransactionType.VENDAS
    elif num == 7:
        return TransactionType.RECEBIMENTO_TED
    elif num == 8:
        return TransactionType.RECEBIMENTO_DOC
    else:
        return TransactionType.ALUGUEL


def transaction_kind_of_type(type: str) -> str:
    OUT = ["Boleto", "Financiamento", "Aluguel"]

    if type in OUT:
        return "Saída"
    else:
        return "Entrada"
