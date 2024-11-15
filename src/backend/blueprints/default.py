from flask import Blueprint, request
from datetime import datetime


default_blueprint = Blueprint('default_blueprint', __name__)

@default_blueprint.route('/', methods=['GET'])
def index():
    now = datetime.now()

    return {"status": 200, "date": now}