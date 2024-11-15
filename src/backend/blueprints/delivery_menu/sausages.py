from flask import Blueprint, request, jsonify
from models.models import Sausages


sausages_blueprint = Blueprint('sausages_blueprint', __name__)

@sausages_blueprint.route('/sausages/', methods=['GET'])
def get_sausages():
    list_of_subject = Sausages.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)