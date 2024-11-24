from flask import Blueprint, jsonify
from models.models import City

cities_menu_blueprint = Blueprint('cities_menu_blueprint', __name__)


@cities_menu_blueprint.route('/city', methods=['GET'])
def get_cities():
    list_of_subject = City.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)