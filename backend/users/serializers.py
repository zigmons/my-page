from rest_framework import serializers
from users.models import Signup
from django.contrib.auth.hashers import make_password


class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signup
        fields = ['name', 'email', 'password']

    def create(self, validated_data):
        validated_data['password'] = make_password(
            validated_data.get('password'))
        user = Signup.objects.create(**validated_data)
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signup
        fields = ['id', 'name', 'email']
