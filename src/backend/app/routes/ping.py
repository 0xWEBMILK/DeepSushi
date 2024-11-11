from flask import Blueprint
import datetime


bp = Blueprint('ping', __name__,)


@bp.route('/')
def index():
    return {"status": 200, "message": "pong", "date": datetime.datetime.now()}
