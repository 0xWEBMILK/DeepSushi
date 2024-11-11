import asyncio
from backend.config.logger_setup import logger
from backend.config import main_settings

from backend.app.routes.ping import bp as ping

from flask import Flask, render_template, request


async def main(*args, **kwargs) -> None:
    logger.info("Getting variables | Started")
    config = main_settings.get_all_settings()

    server_config = config["server"]
    auth_config = config["auth"]
    logger.info("Getting variables | Successful")

    logger.info("Initializing model | Started")
    app = Flask(__name__)
    logger.info("Initializing model | Successful")

    logger.info("Initializing routes | Started")
    app.register_blueprint(ping)
    logger.info("Initializing routes | Successful")

    logger.info("Starting server | Started")
    app.run(host=server_config["host"],
            port=server_config["port"],
            debug=server_config["debug"])
    logger.info("Starting server | Successful")


if __name__ == "__main__":
    asyncio.run(main())