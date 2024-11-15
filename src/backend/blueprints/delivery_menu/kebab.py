from flask import Blueprint, request, jsonify
from models.models import Kebab


kebab_blueprint = Blueprint('kebab_blueprint', __name__)

@kebab_blueprint.route('/kebab/', methods=['GET'])
def get_kebab():
    list_of_subject = Kebab.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)