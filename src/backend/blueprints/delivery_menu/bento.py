from flask import Blueprint, request, jsonify
from models.models import Bento


bento_blueprint = Blueprint('bento_blueprint', __name__)

@bento_blueprint.route('/bento/', methods=['GET'])
def get_bento():
    list_of_subject = Bento.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)