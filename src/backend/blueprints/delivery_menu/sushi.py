from flask import Blueprint, request, jsonify
from models.models import Sushi


sushi_blueprint = Blueprint('sushi_blueprint', __name__)

@sushi_blueprint.route('/sushi/', methods=['GET'])
def get_subject():
    list_of_subject = Sushi.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)