# app.py
from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'  # keep this

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

@app.route('/quiz', methods=['GET'])
def quiz():
    # When first loading the quiz, score and total_questions are None
    return render_template('quiz.html', score=None, total_questions=None)

@app.route('/submit_quiz', methods=['POST'])
def submit_quiz():
    # Correct answers (match the "value" attributes in your HTML)
    correct_answers = {
        'q1': '5',          # magnitude of <3,4> is 5
        'q2': '1',          # u·v = 1·3 + 2·(-1) = 1
        'q3': '2',          # solution gives x = 2
        'q4': '(1,2,3)'     # system solution
    }

    score = 0
    total_questions = len(correct_answers)

    # Count how many are correct
    for q, correct_value in correct_answers.items():
        user_answer = request.form.get(q)
        if user_answer == correct_value:
            score += 1

    # Show a flash message and re‑render the quiz with the score
    flash(f"You scored {score} out of {total_questions}.", "success")
    return render_template('quiz.html', score=score, total_questions=total_questions)

if __name__ == '__main__':
    app.run(debug=True)
