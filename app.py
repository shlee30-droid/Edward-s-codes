# app.py
from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message
import os

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'  # change this in production

# Configure mail (example using Gmail)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'shlee110115@gmail.com'      # your email
app.config['MAIL_PASSWORD'] = 'Shsjkeum768#$'    # app password, not regular password
app.config['MAIL_DEFAULT_SENDER'] = 'shlee110115@gmail.com'

mail = Mail(app)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/toc')
def toc():
    return render_template('toc.html')

@app.route('/vectors')
def vectors():
    return render_template('vectors.html')

@app.route('/systems')
def systems():
    return render_template('systems.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

@app.route('/submit_quiz', methods=['POST'])
def submit_quiz():
    # Get form data
    name = request.form.get('name', 'Anonymous')
    email = request.form.get('email', '')
    answers = {}
    for key in request.form:
        if key.startswith('q'):
            answers[key] = request.form[key]

    # Build email body
    body = f"Quiz submitted by:\nName: {name}\nEmail: {email}\n\nAnswers:\n"
    for q, ans in answers.items():
        body += f"{q}: {ans}\n"

    # Send email
    try:
        msg = Message(
            subject="Pre‑Calculus Quiz Submitted",
            recipients=["your_teacher_email@example.com"],  # where to send
            body=body
        )
        mail.send(msg)
        flash("Quiz submitted! An email has been sent.", "success")
    except Exception as e:
        flash(f"Error sending email: {str(e)}", "error")

    return redirect(url_for('quiz'))

if __name__ == '__main__':
    app.run(debug=True)
