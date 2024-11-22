from app import app
from config.settings import config


if __name__ == '__main__':
    server_config = config['server']

    app.run(host=server_config['host'],
            port=server_config['port'],
            debug=server_config['debug'],
            use_reloader=True)