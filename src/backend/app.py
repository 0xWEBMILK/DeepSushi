from flask import Flask
from database.db import db
from flask_cors import CORS

from config.settings import config
from config.logger_setup import logger

from blueprints.default import default_blueprint
from blueprints.delivery_menu.bento import bento_blueprint
from blueprints.delivery_menu.desserts import desserts_blueprint
from blueprints.delivery_menu.hot_rolls import hot_rolls_blueprint
from blueprints.delivery_menu.juices import juices_blueprint
from blueprints.delivery_menu.kebab import kebab_blueprint
from blueprints.delivery_menu.menu_for_kids import menu_for_kids_blueprint
from blueprints.delivery_menu.noodles import noodles_blueprint
from blueprints.delivery_menu.onigiri import onigiri_blueprint
from blueprints.delivery_menu.pizza_burgers import pizza_burgers_blueprint
from blueprints.delivery_menu.rolls import rolls_blueprint
from blueprints.delivery_menu.salats import salats_blueprint
from blueprints.delivery_menu.sashimi import sashimi_blueprint
from blueprints.delivery_menu.sausages import sausages_blueprint
from blueprints.delivery_menu.seafood import seafood_blueprint
from blueprints.delivery_menu.sets import sets_blueprint
from blueprints.delivery_menu.soup import soup_blueprint
from blueprints.delivery_menu.sushi import sushi_blueprint

from utils.http import bad_request, not_found, not_allowed, internal_error
from utils.errors import BadRequestException


def create_app():
    logger.info("Config initialising | Started")
    database_config = config['database']
    server_config = config['server']
    logger.info("Config initialising | Successful")

    logger.info("Model initialising | Started")
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = database_config['sqlalchemy_database_uri']
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = database_config['sqlalchemy_track_modifications']
    logger.info("Model initialising | Successful")

    logger.info("App settings initialising | Started")
    app.url_map.strict_slashes = False
    db.init_app(app)
    CORS(app)
    logger.info("App settings initialising | Successful")

    logger.info("Blueprints initilising | Started")
    app.register_blueprint(default_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(bento_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(desserts_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(hot_rolls_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(juices_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(kebab_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(menu_for_kids_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(noodles_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(onigiri_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(pizza_burgers_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(rolls_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(salats_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(sashimi_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(sausages_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(seafood_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(sets_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(soup_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(sushi_blueprint, url_prefix=server_config['api_prefix'])
    logger.info("Blueprints initilising | Successful")


    logger.info("Error 400 handler initialising | Started")
    @app.errorhandler(BadRequestException)
    def bad_request_exception(e):
        return bad_request(e)
    logger.info("Error 400 handler initialising | Successful")


    logger.info("Error 404 handler initialising | Started")
    @app.errorhandler(404)
    def route_not_found(e):
        return not_found()
    logger.info("Error 404 handler initialising | Successful")


    logger.info("Error 405 handler initialising | Started")
    @app.errorhandler(405)
    def method_not_allowed(e):
        return not_allowed()
    logger.info("Error 405 handler initialising | Successful")


    logger.info("Error 500 handler initialising | Started")
    @app.errorhandler(Exception)
    def internal_server_error(e):
        return internal_error()
    logger.info("Error 500 handler initialising | Successful")

    logger.info("Successful app initilising!")
    return app


app = create_app()
