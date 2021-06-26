from datetime import datetime
from flask import Flask

app = Flask(__name__)

@app.route('/datetime', methods=['GET'])
def get_current_time():
  return {'datetime': datetime.now()}

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0')