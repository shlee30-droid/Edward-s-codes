# app.py
from flask import Flask, render_template

# Initialize the Flask application
app = Flask(__name__)

# --- Routes (Website Pages) ---

# 1. Home Page: Introduction to Algebra II
@app.route("/")
def index():
    """Renders the main landing page with an intro to Algebra II."""
    return render_template("index.html")

# 2. Complex Numbers Explanation
@app.route("/complex-numbers")
def complex_numbers():
    """Renders the page explaining Complex Numbers."""
    return render_template("complex_numbers.html")

# 3. Exponentials and Logarithms Explanation
@app.route("/logarithms")
def logarithms():
    """Renders the page explaining Exponentials and Logarithms."""
    return render_template("logarithms.html")

# 4. Polynomial Functions Explanation
@app.route("/polynomials")
def polynomials():
    """Renders the page explaining Polynomial Functions."""
    return render_template("polynomials.html")


# --- Run the Application ---

if __name__ == "__main__":
    # Runs the app on http://127.0.0.1:5000/
    app.run(debug=True)