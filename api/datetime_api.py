from datetime import datetime
from flask import Flask

app = Flask(__name__)

# API that returns the date and time
@app.route('/datetime', methods=['GET'])
def get_current_time():
  return {'datetime': datetime.now()}

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0')