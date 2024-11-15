from flask import Blueprint, request, jsonify
from models.models import Soup


soup_blueprint = Blueprint('soup_blueprint', __name__)

@soup_blueprint.route('/soup/', methods=['GET'])
def get_soup():
    list_of_subject = Soup.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)