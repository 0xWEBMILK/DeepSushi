from flask import Blueprint, request, jsonify
from models.models import Juices


juices_blueprint = Blueprint('juices_blueprint', __name__)

@juices_blueprint.route('/juices/', methods=['GET'])
def get_juices():
    list_of_subject = Juices.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)