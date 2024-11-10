import asyncio
from backend.config.logger_setup import logger
from backend.config import main_settings

from flask import Flask, render_template, request

async def main(*args, **kwargs) -> None:
    logger.info("Getting variables | Started")
    config = main_settings.get_all_settings()

    server_config = config["server"]
    auth_config = config["auth"]
    logger.info("Getting variables | Successful")

    app = Flask(__name__)

    app.run(host=server_config["host"],
            port=server_config["port"])


if __name__ == "__main__":
    asyncio.run(main())