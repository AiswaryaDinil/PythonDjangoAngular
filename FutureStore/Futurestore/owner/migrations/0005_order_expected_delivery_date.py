# Generated by Django 4.1.1 on 2022-10-06 08:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('owner', '0004_rename_product_name_carts_product_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='expected_delivery_date',
            field=models.DateTimeField(null=True),
        ),
    ]
