from flask import Blueprint, request, jsonify
from models.models import Desserts


desserts_blueprint = Blueprint('desserts_blueprint', __name__)

@desserts_blueprint.route('/desserts/', methods=['GET'])
def get_desserts():
    list_of_subject = Desserts.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)