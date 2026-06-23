from logger import logger

logger.log_request("POST", "/notifications", {"studentId": 101})

logger.log_response(200, {"message": "success"})

logger.log_error("Something went wrong")