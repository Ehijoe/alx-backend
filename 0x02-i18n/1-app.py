#!/usr/bin/env python3
"""A basic flask app."""
from flask import Flask, render_template
from flask_babel import Babel


class Config(object):
    """Configuration class."""

    LANGUAGES = ["en", "fr"]


app = Flask(__name__)
babel = Babel(app)


@app.route("/")
def index():
    """Handle the index route."""
    return render_template("0-index.html")


if __name__ == '__main__':
    app.run(debug=True)
