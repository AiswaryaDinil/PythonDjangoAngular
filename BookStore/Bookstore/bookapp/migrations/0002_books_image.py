# Generated by Django 4.1.1 on 2022-10-06 16:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='books',
            name='image',
            field=models.ImageField(null=True, upload_to='images'),
        ),
    ]
