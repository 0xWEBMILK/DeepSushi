from flask import Blueprint, request, jsonify
from models.models import HotRolls


hot_rolls_blueprint = Blueprint('hot_rolls_blueprint', __name__)

@hot_rolls_blueprint.route('/hot_rolls/', methods=['GET'])
def get_hot_rolls():
    list_of_subject = HotRolls.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)