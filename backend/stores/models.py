import uuid

from django.db import models


class Store(models.Model):
    id = models.UUIDField(
        default=uuid.uuid4, primary_key=True, unique=True, editable=True
    )
    name = models.CharField(max_length=50, unique=True)
    owner_name = models.CharField(max_length=50)
