from .config_setup import main_settings

def get_all_settings():
    return {
        "server": {
            "host": main_settings.server.host.get_secret_value(),
            "port": main_settings.server.port.get_secret_value()
        },
        "auth": {
            "secret": main_settings.auth.secret.get_secret_value()
        }
    }