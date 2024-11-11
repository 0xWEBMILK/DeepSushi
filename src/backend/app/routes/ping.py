from flask import Blueprint
import datetime

bp = Blueprint('ping', __name__,)


@bp.route('/')
def index() -> dict:
    # The main router for API calls test
    return {"status": 200, "message": "pong", "date": datetime.datetime.now()}
