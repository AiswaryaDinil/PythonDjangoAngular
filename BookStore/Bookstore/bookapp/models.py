from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Books(models.Model):
    bookname=models.CharField(max_length=200)
    author=models.CharField(max_length=200)
    price=models.IntegerField()
    image=models.ImageField(upload_to="images",null=True)
    qty=models.IntegerField()
    publisher=models.CharField(max_length=200)
    def __str__(self):
        return self.bookname
