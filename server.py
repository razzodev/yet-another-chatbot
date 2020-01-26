from flask import Flask, request, jsonify
import json

app = Flask(__name__,)


@app.route('/')
def homepage():
    return app.send_static_file('index.html')


@app.route('/static/<path:path>')
def static_root(path):
    return app.send_static_file(path)


@app.route('/static/js/<path:path>')
def javascripts(path):
    return app.send_static_file('js/' + path)


@app.route('/static/css/<path:path>')
def stylesheets(path):
    return app.send_static_file('css/' + path)


@app.route('/send')
def message_handler():
    msg = request.args.get('message')
    return jsonify(msg)


if __name__ == "__main__":
    app.run(host='localhost', port=5003)
