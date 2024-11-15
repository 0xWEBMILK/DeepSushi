from flask import Blueprint, request, jsonify
from models.models import Sets


sets_blueprint = Blueprint('sets_blueprint', __name__)

@sets_blueprint.route('/sets/', methods=['GET'])
def get_sets():
    list_of_subject = Sets.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)