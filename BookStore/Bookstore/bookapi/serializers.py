from rest_framework.serializers import ModelSerializer
from bookapp.models import Books
from django.contrib.auth.models import User
from rest_framework import serializers

class BookSerializer(ModelSerializer):
    id=serializers.CharField(read_only=True)
    class Meta:
        model=Books
        fields=[
                "id",
                "bookname",
                "author",
                "price",
                "qty",
                "publisher"
        ]
    def create(self, validated_data):
       return Books.objects.create(**validated_data)