from flask import Blueprint, jsonify
from models.models import Promotion

promotions_blueprint = Blueprint('promotions_blueprint', __name__)

@promotions_blueprint.route('/promotions', methods=['GET'])
def get_promotions():
    list_of_subject = Promotion.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)
