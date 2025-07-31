from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from groq import Groq
from dotenv import load_dotenv

load_dotenv() # Load environment variables from .env file

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Retrieve Groq API key
groq_api_key = os.getenv("GROQ_API_KEY")

if not groq_api_key:
    raise ValueError("Groq Api Key not found in environment variables")

# Initialize Groq client with your API key from environment variables
client = Groq(
    api_key = groq_api_key
)

@app.route("/ask", methods=["POST"]) # This decorator creates the home route
def ask():
    # Get question from POST request JSON data
    data = request.get_json()
    question = data.get("question", "").strip()

    if not question:
        return jsonify({"error" : "No question provided"}), 400
    
    try:
        # Make request to Groq API
        chat_completion = client.chat.completions.create(
            model = "llama3-70b-8192",
            messages=[
                {
                    "role" : "system",
                    "content": (
                        "You are SafePath AI, a kind and knowledgeable assistant "
                        "who helps undocumented students by answering legal questions "
                        "and providing emotional support in a simple, non-judgmental way."
                    )
                },

                {
                    "role": "user",
                    "content": question,
                }
            ],
            temperature=0.7
            
        )

        response = chat_completion.choices[0].message.content
        # print(f"[SafePath AI Response]: {response}")

        return jsonify({"answer": response})
    
    except Exception as e:
        return jsonify({"error": "Something went wrong", "details": str(e)}), 500
    

if __name__ == "__main__":
    app.run(debug=True)