from flask import Blueprint, request, jsonify
from models.models import Sashimi


sashimi_blueprint = Blueprint('sashimi_blueprint', __name__)

@sashimi_blueprint.route('/sashimi/', methods=['GET'])
def get_sashimi():
    list_of_subject = Sashimi.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)