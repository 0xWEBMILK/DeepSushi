from database.db import db
from sqlalchemy.ext.declarative import declared_attr


from sqlalchemy.ext.declarative import declared_attr


class FoodBaseModel(db.Model):
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


class Promotion(db.Model):
    __tablename__ = 'promotions'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    date = db.Column(db.String, nullable=False)
    file_path = db.Column(db.String, nullable=False)

    def __init__(self, title, description, date, file_path):
        self.title = title
        self.description = description
        self.date = date
        self.file_path = file_path

    def __repr__(self):
        return "Promotion(title='{}', description='{}', date='{}', file_path='{}')".format(
            self.title,
            self.description,
            self.date,
            self.file_path
        )

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'date': self.date,
            'file_path': self.file_path
        }

    @classmethod
    def from_json(cls, json):
        return cls(json['title'], json['description'], json['date'], json['file_path'])


class Sushi(FoodBaseModel):
    pass

class Sashimi(FoodBaseModel):
    pass

class Rolls(FoodBaseModel):
    pass

class HotRolls(FoodBaseModel):
    pass

class Onigiri(FoodBaseModel):
    pass

class Sets(FoodBaseModel):
    pass

class Salats(FoodBaseModel):
    pass

class Bento(FoodBaseModel):
    pass

class Desserts(FoodBaseModel):
    pass

class Juices(FoodBaseModel):
    pass

class Kebab(FoodBaseModel):
    pass

class MenuForKids(FoodBaseModel):
    pass

class PizzaBurgers(FoodBaseModel):
    pass

class Sausages(FoodBaseModel):
    pass

class Soup(FoodBaseModel):
    pass

class Seafood(FoodBaseModel):
    pass

class Noodles(FoodBaseModel):
    pass

