# from django.test import TestCase
# from subscriptions.api.subscriptions_rest.models import User
# from django.urls import reverse

# class FeatureTests(TestCase):
#     # def setUp(self):
#     #     self.client = Client()
#     #     self.response = self.client.get("app/LoginForm/")
#     #     self.content = self.response.content.decode("utf-8")
#     #     # self.document = Document()
#     #     # self.document.feed(self.content)
    
#     def test_login(self):
#         User.objects.create_user("impulse", password="password1234")
#         response = self.client.post(
#             reverse("login"),
#             {"username": "impulse", "password": "password1234"},
#         )
#         self.assertEqual(
#             response.status_code,
#             302,
#             msg="Login does not seem to work",
#         )
