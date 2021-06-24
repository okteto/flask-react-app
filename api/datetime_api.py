from datetime import datetime
from flask import Flask

app = Flask(__name__)

@app.route('/datetime')
def get_current_time():
    return {'Date and Time is': datetime.now()}


