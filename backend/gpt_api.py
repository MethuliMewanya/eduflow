# STEP 1: Install Gemini SDK
# !pip install -q google-generativeai

# STEP 2: Import and configure Gemini
import os
import google.generativeai as genai

# Use your API key here
# genai.configure(api_key="")
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))


# STEP 3: Define prompt and generate learning path
def generate_learning_path(subject, marks):
    prompt = f"""You are an AI learning assistant.
A student scored {marks}% in {subject}.
Suggest a simple learning path with short YouTube tutorial topics (not longer than 15 minutes per video) and links to improve understanding of {subject}.
List the topics step by step.
Return the output in a clean, readable format with bullet points."""

    model = genai.GenerativeModel("gemini-1.5-flash-latest") # Changed model name
    response = model.generate_content(prompt)
    return response.text

# STEP 4: Test it
# subject = "Data Structures"
# marks = 65
# output = generate_learning_path(subject, marks)
# print(output)

from fastapi import FastAPI, Request
from pydantic import BaseModel
import uvicorn

app = FastAPI()

class Input(BaseModel):
    subject: str
    marks: int

@app.post("/generate")
async def get_learning_path(data: Input):
    result = generate_learning_path(data.subject, data.marks)
    return {"path": result}

# If running locally (you don't need this in colab)
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
