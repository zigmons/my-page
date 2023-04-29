from rest_framework import serializers
from users.models import Signup


class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signup
        fields = ['name', 'email', 'password']

    def create(self, validated_data):
        user = Signup.objects.create(**validated_data)
        return user
