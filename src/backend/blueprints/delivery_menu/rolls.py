from flask import Blueprint, request, jsonify
from models.models import Rolls


rolls_blueprint = Blueprint('rolls_blueprint', __name__)

@rolls_blueprint.route('/rolls/', methods=['GET'])
def get_rolls():
    list_of_subject = Rolls.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)