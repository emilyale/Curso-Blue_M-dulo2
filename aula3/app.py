from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<h1>Hello, Flask! Olha a T2C3 na área!</h1>"
    