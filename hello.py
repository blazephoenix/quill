from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

@app.route("/api")
def home():
    return "Hello World"


if __name__ == "__main__":
    app.run(debug=True)