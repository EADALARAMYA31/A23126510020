import time
from datetime import datetime

class Logger:

    def log_request(self, method, endpoint, data=None):
        print(f"[REQUEST] {datetime.now()} | {method} | {endpoint} | {data}")

    def log_response(self, status, response):
        print(f"[RESPONSE] {datetime.now()} | {status} | {response}")

    def log_error(self, error):
        print(f"[ERROR] {datetime.now()} | {error}")


logger = Logger()