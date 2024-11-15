from database.db import db
from datetime import datetime
from sqlalchemy.ext.declarative import declared_attr


from sqlalchemy.ext.declarative import declared_attr

class BaseModel(db.Model):
    __abstract__ = True

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    description = db.Column(db.String)
    file_path = db.Column(db.String)
    price = db.Column(db.Integer)

    @declared_attr
    def __tablename__(cls):
        return cls.__name__.lower()

    def __init__(self, title, description, price):
        self.title = title
        self.description = description
        self.price = price

    def __repr__(self):
        return "{}(title='{}', description='{}', price='{}')".format(
            self.__class__.__name__,
            self.title,
            self.description,
            self.price
        )

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "file_path": self.file_path,
            "price": self.price
        }


class Sushi(BaseModel):
    pass

class Sashimi(BaseModel):
    pass

class Rolls(BaseModel):
    pass

class HotRolls(BaseModel):
    pass

class Onigiri(BaseModel):
    pass

class Sets(BaseModel):
    pass

class Salats(BaseModel):
    pass

class Bento(BaseModel):
    pass

class Desserts(BaseModel):
    pass

class Juices(BaseModel):
    pass

class Kebab(BaseModel):
    pass

class MenuForKids(BaseModel):
    pass

class PizzaBurgers(BaseModel):
    pass

class Sausages(BaseModel):
    pass

class Soup(BaseModel):
    pass

class Seafood(BaseModel):
    pass

class Noodles(BaseModel):
    pass