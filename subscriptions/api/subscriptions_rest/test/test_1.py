from django.test import TestCase, Client
from django.urls import reverse
from subscriptions_rest.models import User

class TestViews(TestCase):
    def setUp(self):
        User.objects.create(
            username="impulse",
            email="test@test.com",
            first_name="Test",
            last_name="Testy",
            password="password1234",
        )
        
    def test_users_list_GET(self):
        client = Client()
        response = client.get(reverse("users_list"))
        self.assertEquals(response.status_code, 200)
    
    def test_show_receipt(self):
        client = Client()
        response = client.get(reverse("show_receipt"))
        self.assertEquals(response.status_code, 200)
        
