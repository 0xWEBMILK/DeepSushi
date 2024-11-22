from flask import Blueprint, request, jsonify
from models.models import Food

delivery_menu_blueprint = Blueprint('delivery_menu_blueprint', __name__)


@delivery_menu_blueprint.route('food', methods=['GET'])
def get_food():
    category = request.args.get('category')

    list_of_subject = Food.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    subject_list = list(filter(lambda subject: subject['category'] == category, subject_list))
    return subject_list