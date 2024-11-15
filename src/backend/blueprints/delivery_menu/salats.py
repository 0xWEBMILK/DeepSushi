from flask import Blueprint, request, jsonify
from models.models import Salats


salats_blueprint = Blueprint('salats_blueprint', __name__)

@salats_blueprint.route('/salats/', methods=['GET'])
def get_salats():
    list_of_subject = Salats.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)