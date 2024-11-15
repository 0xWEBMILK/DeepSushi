from flask import Blueprint, request, jsonify
from models.models import PizzaBurgers


pizza_burgers_blueprint = Blueprint('pizza_burgers_blueprint', __name__)

@pizza_burgers_blueprint.route('/pizza_burgers/', methods=['GET'])
def get_pizza_burgers():
    list_of_subject = PizzaBurgers.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)