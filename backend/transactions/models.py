import uuid

from django.db import models


class TransactionType(models.TextChoices):
    DEBITO = "Débito"
    BOLETO = "Boleto"
    FINANCIAMENTO = "Financiamento"
    CREDITO = "Crédito"
    RECEBIMENTO_EMPRESTIMO = "Recebimento Empréstimo"
    VENDAS = "Vendas"
    RECEBIMENTO_TED = "Recebimento TED"
    RECEBIMENTO_DOC = "Recebimento DOC"
    ALUGUEL = "Aluguel"


class Transaction(models.Model):
    id = models.UUIDField(
        default=uuid.uuid4, primary_key=True, unique=True, editable=False
    )
    type = models.CharField(max_length=50, choices=TransactionType.choices)
    date = models.DateField()
    value = models.FloatField()
    cpf = models.CharField(max_length=50)
    card_number = models.CharField(max_length=50)
    hour = models.TimeField()
    store = models.ForeignKey(
        "stores.Store",
        on_delete=models.CASCADE,
        related_name="transactions",
    )
