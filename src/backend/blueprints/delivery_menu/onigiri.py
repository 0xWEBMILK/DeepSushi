from flask import Blueprint, request, jsonify
from models.models import Onigiri


onigiri_blueprint = Blueprint('onigiri_blueprint', __name__)

@onigiri_blueprint.route('/onigiri/', methods=['GET'])
def get_onigiri():
    list_of_subject = Onigiri.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)