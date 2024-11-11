from .config_setup import main_settings

def get_all_settings() -> dict:
    """
    Returns a dictionary containing all the settings as a key-value pair.
    The returned dictionary will have the following structure:
        {
            "server": {
                "host": <string>,
                "port": <int>,
                "debug": <boolean>
            },
            "auth": {
                "secret": <string>
            }
        }
    """
    return {
        "server": {
            "host": main_settings.server.host.get_secret_value(),
            "port": main_settings.server.port.get_secret_value(),
            "debug": main_settings.server.debug
        },
        "auth": {
            "secret": main_settings.auth.secret.get_secret_value()
        }
    }