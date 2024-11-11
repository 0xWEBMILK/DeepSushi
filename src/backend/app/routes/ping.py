from flask import Blueprint
import datetime

bp = Blueprint('ping', __name__,)


@bp.route('/')
def index() -> dict:
    """ 
    Responds to GET requests to /ping

    Returns a dictionary containing:
        - status: HTTP status code
        - message: "pong"
        - date: current datetime
    """
    return {"status": 200, "message": "pong", "date": datetime.datetime.now()}
