from flask import Flask, render_template, request, jsonify
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

# --- CONFIGURATION ---
# IMPORTANT: Replace these with your actual details
SENDER_EMAIL = "your_sending_email@gmail.com"
SENDER_PASSWORD = "your_app_password"  # Use an App Password if using Gmail
RECIPIENT_EMAIL = "your_recipient_email@example.com"
SMTP_SERVER = "smtp.gmail.com" # Change if not using Gmail
SMTP_PORT = 587 # Standard TLS port

@app.route('/')
def index():
    """Renders the main quiz page."""
    return render_template('index.html')

@app.route('/submit_quiz', methods=['POST'])
def submit_quiz():
    """Receives quiz data and sends an email notification."""
    try:
        data = request.get_json()
        
        # In a real application, you would save this data to a database
        # For this example, we'll just use the received data to create the email body
        
        # Format the email content
        quiz_summary = ""
        for key, value in data.items():
            quiz_summary += f"- {key}: {value}\n"
        
        email_body = f"A new quiz submission has been received!\n\nQuiz Results:\n{quiz_summary}"
        
        # --- Email Sending Logic ---
        msg = MIMEText(email_body)
        msg['Subject'] = 'New Pre-Calculus Quiz Submission!'
        msg['From'] = SENDER_EMAIL
        msg['To'] = RECIPIENT_EMAIL

        # Connect to the SMTP server and send the email
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.ehlo()
            server.starttls()  # Start TLS encryption
            server.ehlo()
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.sendmail(SENDER_EMAIL, RECIPIENT_EMAIL, msg.as_string())
        
        print("Email sent successfully!")
        
        # Send a success response back to the JavaScript
        return jsonify({'message': 'Quiz submitted and email sent successfully!'}), 200

    except Exception as e:
        print(f"An error occurred: {e}")
        # Send an error response back to the JavaScript
        return jsonify({'message': f'Submission failed: {str(e)}'}), 500

if __name__ == '__main__':
    # Run the server on http://127.0.0.1:5000/
    app.run(debug=True)