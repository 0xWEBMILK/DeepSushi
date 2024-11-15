from flask import Blueprint, request, jsonify
from models.models import Noodles


noodles_blueprint = Blueprint('noodles_blueprint', __name__)

@noodles_blueprint.route('/noodles/', methods=['GET'])
def get_noodles():
    list_of_subject = Noodles.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)