from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy

#instantiate Flask functionality
app = Flask(__name__)

# set sqlalchemy URI in application config
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# instance of SQL

db = SQLAlchemy(app)


class TodoList(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    detail = db.Column(db.Text, nullable=False)

    def __str__(self):
      return f"{self.id} {self.detail}"

def todo_serializer(todo):
  return{
    "id":todo.id,
    "detail":todo.detail
  }

@app.route('/api', methods=['GET'])
def home():
  return jsonify([*map(todo_serializer, TodoList.query.all())])

@app.route('/api/todocreate', methods=['POST'])
def todo_create():
  request_data = json.loads(request.data)
  todo = TodoList(detail=request_data['detail'])

  db.session.add(todo)
  db.session.commit()

  return{'201':'todo created successfully'}

@app.route('/api/<int:id>')
def detail_view(id):
  return jsonify([*map(todo_serializer, TodoList.query.filter_by(id=id))])

@app.route('/api/<int:id>', methods=['PUT'])
def update_todo(id):
  todo = TodoList.query.get(id)
  detail = request.json['detail']
  todo.detail = detail
  db.session.commit()

  return {"200":"Updated successfully"}

@app.route('/api/<int:id>', methods=['POST'])
def delete_todo(id):
  request_data = json.loads(request.data)
  TodoList.query.filter_by(id=request_data['id']).delete()
  db.session.commit()
  return {"204":"Updated successfully"}

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0')
