# Generated by Django 4.2.6 on 2023-11-16 08:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cb_app', '0002_remove_jobs_resume'),
    ]

    operations = [
        migrations.CreateModel(
            name='UsersProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(max_length=255)),
                ('photo', models.ImageField(blank=True, upload_to='profile_photos/')),
                ('email', models.EmailField(max_length=254, null=True)),
                ('phone1', models.CharField(max_length=255, null=True)),
                ('phone2', models.CharField(max_length=255, null=True)),
                ('current_address', models.CharField(max_length=255)),
                ('permanant_address', models.CharField(max_length=255)),
                ('Education', models.CharField(max_length=255)),
                ('skills', models.CharField(max_length=255)),
                ('certifications', models.CharField(max_length=255)),
                ('resume', models.FileField(blank=True, upload_to='resume/')),
                ('profile_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
