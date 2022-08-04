from django.test import TestCase


class FeatureTests(TestCase):
    def test_clothing_model_exists(self):
        try:
            from products_rest.models import Clothing
        except ModuleNotFoundError:
            self.fail("Could not find my 'Clothing', how embarrassing")