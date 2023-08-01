from flask import Flask, request, jsonify, render_template
import random
import requests

app = Flask(__name__)


def validate_data(data):
    errors = {}
    valid_colors = ["red", "green", "orange", "blue"]

    if not data.get("name"):
        errors["name"] = ["This field is required."]
    if not data.get("color") or data.get("color") not in valid_colors:
        errors["color"] = ["Invalid value, must be one of: red, green, orange, blue."]
    if not data.get("year") or not (1900 <= int(data["year"]) <= 2000):
        errors["year"] = ["Invalid value, must be between 1900 and 2000, inclusive."]

    return errors


@app.route("/api/get-lucky-num", methods=["POST"])
def get_lucky_num():
    data = request.json

    errors = validate_data(data)
    if errors:
        return jsonify({"errors": errors}), 400

    # Get a random lucky number from 1 to 100
    lucky_num = random.randint(1, 100)

    # Fetch facts about the lucky number and birth year from numbersapi API
    num_fact = requests.get(f"http://numbersapi.com/{lucky_num}").text
    year_fact = requests.get(f"http://numbersapi.com/{data['year']}").text

    response_data = {
        "num": {"fact": num_fact, "num": lucky_num},
        "year": {"fact": year_fact, "year": data["year"]}
    }

    return jsonify(response_data), 200


@app.route("/")
def homepage():
    """Show homepage."""
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
