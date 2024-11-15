from flask import Blueprint, request, jsonify
from models.models import MenuForKids


menu_for_kids_blueprint = Blueprint('menu_for_kids_blueprint', __name__)

@menu_for_kids_blueprint.route('/menu_for_kids/', methods=['GET'])
def get_menu_for_kids():
    list_of_subject = MenuForKids.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)