from flask import Flask, request, jsonify
from flask_cors import CORS
import requests, os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app)

@app.route("/ask", method=["POST"]) # This decorator creates the home route
def ask():
    data = requests.get_json()
    question = data.get("question", "")

    response = requests.post(
        "https://api.groq.com/openai/v1/chat/completions",
        headers={
            "Authorization" : f"Bearer {os.getenv("GROQ_API_KEY")}",
            "Content-Type" : "application/json"
        },
        json={
            "model" : "mixtral-8x7b-32768",
            "messages" : [
                {"role" : "system", "content" : "You are SafePath AI, a kind and knowledgeable assistant who helps undocumented students by answering legal questions and providing emotional support in a simple, non-judgmental way."},
                {"role" : "user", "content" : question}
            ],
            "temperature" : 0.7
        }
    )
    return jsonify(response.json())

if __name__ == "__main__":
    app.run(debug=True)