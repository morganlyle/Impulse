from django.test import TestCase, Client
from django.urls import reverse
from subscriptions_rest.models import User

class TestViews(TestCase):
    def setUp(self):
        User.objects.create(
            username="Test User",
            email="test@test.com",
            first_name="Test",
            last_name="Testy",
            password="impulse",
        )

    
    def test_users_list_GET(self):
        client = Client()
        response = client.get(reverse("users_list"))
        self.assertEquals(response.status_code, 200)

    
    # def setUp(self):
    #     self.client = Client()
    #     self.response = self.client.get("app/LoginForm/")
    #     self.content = self.response.content.decode("utf-8")
    #     self.document = Document()
    #     self.document.feed(self.content)
    
    # def test_login(self):
    #     User.objects.create_user("impulse", password="password1234")
    #     response = self.client.post(
    #         reverse("login"),
    #         {"username": "impulse", "password": "password1234"},
    #     )
    #     self.assertEqual(
    #         response.status_code,
    #         302,
    #         msg="Login does not seem to work",
    #     )



#     def test_accounts_app_created(self):
#         try:
#             from subscriptions_rest.apps import SubscriptionsRestConfig  # noqa: F401
#         except ModuleNotFoundError:
#             self.fail("Could not find the Django app 'accounts'")

# def test_black_installed(self):
#         try:
#             import black  # noqa: F401
#         except ModuleNotFoundError:
#             self.fail("Could not find 'black' installed in the environment")

#     def test_flake8_installed(self):
#         try:
#             import flake8  # noqa: F401
#         except ModuleNotFoundError:
#             self.fail("Could not find 'flake8' installed in the environment")

#     def test_djhtml_installed(self):
#         try:
#             import djhtml  # noqa: F401
#         except ModuleNotFoundError:
#             self.fail("Could not find 'djhtml' installed in the environment")
            
#             def test_logged_out_user_has_login_and_signup_links(self):
#         response = self.client.get(reverse("login"))
#         content = response.content.decode("utf-8")
#         document = Document()
#         document.feed(content)
#         nav = document.select("html", "body", "header", "nav")
#         has_login = False
#         has_signup = False
#         links = nav.get_all_children("a")
#         for link in links:
#             if link.attrs.get("href", "").startswith(reverse("login")):
#                 has_login = True
#             elif link.attrs.get("href", "").startswith(reverse("signup")):
#                 has_signup = True
#         self.assertTrue(
#             has_login and has_signup,
#             msg="Could not find a login and signup link for a logged out user",
#         )