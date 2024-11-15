from .config_setup import main_settings

def get_all_settings():
    return {
        "server": {
            "host": main_settings.server.host.get_secret_value(),
            "port": main_settings.server.port.get_secret_value(),
            "api_prefix": main_settings.server.api_prefix.get_secret_value(),
            "debug": main_settings.server.debug,
        },
        "database": {
            "sqlalchemy_database_uri": main_settings.database.sqlalchemy_database_uri.get_secret_value(),
            "sqlalchemy_track_modifications": main_settings.database.sqlalchemy_track_modifications.get_secret_value()
        }
    }

config = get_all_settings()