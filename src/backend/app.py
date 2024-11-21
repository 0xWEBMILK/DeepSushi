from flask import Flask
from database.db import db
from flask_cors import CORS

from config.settings import config
from config.logger_setup import logger

from blueprints.default import default_blueprint
from blueprints.delivery_menu.delivery_menu import delivery_menu_blueprint
from blueprints.promotions.promotions import promotions_blueprint

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
    app.register_blueprint(delivery_menu_blueprint, url_prefix=server_config['api_prefix'])
    app.register_blueprint(promotions_blueprint, url_prefix=server_config['api_prefix'])
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
