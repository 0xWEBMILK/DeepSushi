from flask import Blueprint, request, jsonify
from models.models import Bento, Desserts, HotRolls, Juices, Kebab, MenuForKids, Noodles, Onigiri, PizzaBurgers, Rolls, Salats, Sashimi, Sausages, Seafood, Sets, Soup, Sushi


delivery_menu_blueprint = Blueprint('bento_blueprint', __name__)


@delivery_menu_blueprint.route('/bento/', methods=['GET'])
def get_bento():
    list_of_subject = Bento.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/desserts/', methods=['GET'])
def get_desserts():
    list_of_subject = Desserts.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/hot_rolls/', methods=['GET'])
def get_hot_rolls():
    list_of_subject = HotRolls.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/juices/', methods=['GET'])
def get_juices():
    list_of_subject = Juices.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/kebab/', methods=['GET'])
def get_kebab():
    list_of_subject = Kebab.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/menu_for_kids/', methods=['GET'])
def get_menu_for_kids():
    list_of_subject = MenuForKids.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/noodles/', methods=['GET'])
def get_noodles():
    list_of_subject = Noodles.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/onigiri/', methods=['GET'])
def get_onigiri():
    list_of_subject = Onigiri.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/pizza_burgers/', methods=['GET'])
def get_pizza_burgers():
    list_of_subject = PizzaBurgers.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/rolls/', methods=['GET'])
def get_rolls():
    list_of_subject = Rolls.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/salats/', methods=['GET'])
def get_salats():
    list_of_subject = Salats.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/sashimi/', methods=['GET'])
def get_sashimi():
    list_of_subject = Sashimi.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/sausages/', methods=['GET'])
def get_sausages():
    list_of_subject = Sausages.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/seafood/', methods=['GET'])
def get_seafood():
    list_of_subject = Seafood.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/sets/', methods=['GET'])
def get_sets():
    list_of_subject = Sets.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/soup/', methods=['GET'])
def get_soup():
    list_of_subject = Soup.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)


@delivery_menu_blueprint.route('/sushi/', methods=['GET'])
def get_subject():
    list_of_subject = Sushi.query.all()
    subject_list = [subject.to_dict() for subject in list_of_subject]
    return jsonify(subject_list)