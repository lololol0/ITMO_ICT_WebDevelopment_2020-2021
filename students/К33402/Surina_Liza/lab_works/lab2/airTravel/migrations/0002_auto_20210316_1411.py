# Generated by Django 3.1.6 on 2021-03-16 11:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('airTravel', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comments',
            name='text',
            field=models.TextField(verbose_name=''),
        ),
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=100)),
                ('surname', models.TextField(max_length=100)),
                ('place', models.CharField(max_length=100)),
                ('moderation', models.BooleanField(default=False, verbose_name='Модерация')),
                ('plane', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='airTravel.schedule', verbose_name='Авиарейс')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
        ),
    ]
