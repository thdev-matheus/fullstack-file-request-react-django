from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User

        fields = [
            "id",
            "username",
            "password",
            "email",
            "updated_at",
            "date_joined",
            "is_superuser",
            "is_active",
        ]

        read_only_fields = [
            "id",
            "updated_at",
            "date_joined",
            "is_superuser",
            "is_active",
        ]

        extra_kwargs = {
            "password": {
                "write_only": True,
            },
        }

    def create(self, validated_data):
        model = self.Meta.model
        instance = model.objects.create_user(**validated_data)
        return instance
