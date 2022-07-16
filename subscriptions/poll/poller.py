import django
import os
import sys
import time
import json
import requests # type: ignore


sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "subscriptions.settings")
django.setup()

# from subscriptions.models import models


def poll():
    while True:
        try:
            print('Subscriptions poller polling for data')
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(10)


if __name__ == "__main__":
    poll()
