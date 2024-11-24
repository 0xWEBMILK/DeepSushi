from database.db import db

        
class City(db.Model):
    __tablename__ = 'cities'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String, nullable=False)

    def __init__(self, title):
        self.title = title

    def __repr__(self):
        return "City(title='{}')".format(
            self.title,
        )

    def to_dict(self):
        return {
            'id': self.id,
            'category': self.category,
            'title': self.title,
            'description': self.description,
            'price': self.price,
            'file_path': self.file_path
        }

    @classmethod
    def from_json(cls, json):
        return cls(json['category'], json['title'], json['description'], json['price'], json['file_path'])

class Food(db.Model):
    __tablename__ = 'cities'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    category = db.Column(db.String, nullable=False)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    price = db.Column(db.Integer)
    file_path = db.Column(db.String, nullable=False)

    def __init__(self, category, title, description, price, file_path):
        self.category = category
        self.title = title
        self.description = description
        self.price = price
        self.file_path = file_path

    def __repr__(self):
        return "Food(category='{}', title='{}', description='{}', price='{}', file_path='{}')".format(
            self.category,
            self.title,
            self.description,
            self.price,
            self.file_path
        )

    def to_dict(self):
        return {
            'id': self.id,
            'category': self.category,
            'title': self.title,
            'description': self.description,
            'price': self.price,
            'file_path': self.file_path
        }

    @classmethod
    def from_json(cls, json):
        return cls(json['category'], json['title'], json['description'], json['price'], json['file_path'])


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
