from django.db import models
from django.apps import AppConfig
from django.contrib.auth.hashers import make_password

# Create your models here.


class Signup(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)

    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super(Signup, self).save(*args, **kwargs)

    class Meta:
        db_table = 'signup'
        app_label = 'datauser'


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    def ready(self):
        from api import models
        models.Signup = models.Signup  # Use the Signup model in api/models.py
