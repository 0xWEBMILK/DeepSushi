from flask import Blueprint, request, jsonify
from models.models import Seafood


seafood_blueprint = Blueprint('seafood_blueprint', __name__)

@seafood_blueprint.route('/seafood/', methods=['GET'])
def get_seafood():
    list_of_subject = Seafood.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)