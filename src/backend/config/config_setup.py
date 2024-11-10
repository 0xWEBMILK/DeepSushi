from pydantic import BaseModel, SecretStr
from decouple import config
from enum import Enum

# Logs settings
class ModeEnum(str, Enum):
    DEVELOPMENT = "dev"
    PRODUCTION = "prod"

class LoggingRenderer(str, Enum):
    JSON = "json"
    CONSOLE = "console"

class LoggingSettings(BaseModel):
    level: str = config("LOGGING_LEVEL", default="INFO")
    format: str = config("LOGGING_FORMAT", default="%Y-%m-%d %H:%M:%S")
    is_utc: bool = config("LOGGING_IS_UTC", default=False, cast=bool)
    renderer: LoggingRenderer = config("LOGGING_RENDERER", default=LoggingRenderer.JSON)
    
    log_unhandled: bool = config("LOGGING_UNHANDLED", default=False, cast=bool)

    class Config:
        env_file = '.env'
        env_file_encoding = 'utf-8'
        env_prefix = "LOGGING_"

# Server settings
class ServerSettings(BaseModel):
    host: SecretStr = SecretStr(config('HOST'))
    port: SecretStr = SecretStr(config('PORT'))

class AuthSettings(BaseModel):
    secret: SecretStr = SecretStr(config('AUTH_SECRET'))


# Main model
class MainSettings(BaseModel):
    server: ServerSettings = ServerSettings()
    auth: AuthSettings = AuthSettings()

    # .env path
    class Config:
        env_file = './config/.env'
        env_file_encoding = 'utf-8'

# Exporting the settings
main_settings = MainSettings()
log_settings = LoggingSettings()