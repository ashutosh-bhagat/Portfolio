from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import smtplib
from email.message import EmailMessage

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # later restrict to your domain
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "Backend is running"}


class ContactForm(BaseModel):
    name: str
    email: str
    message: str

@app.post("/api/contact")
def contact(form: ContactForm):
    send_email(form.name, form.email, form.message)
    return {"success": True, "message": "Email sent"}

def send_email(name: str, email: str, message: str):
    msg = EmailMessage()
    msg["Subject"] = f"Portfolio Contact from {name}"
    msg["From"] = email
    msg["To"] = os.getenv("TO_EMAIL")

    msg.set_content(
        f"Name: {name}\n"
        f"Email: {email}\n\n"
        f"Message:\n{message}"
    )

    with smtplib.SMTP(os.getenv("SMTP_HOST"), int(os.getenv("SMTP_PORT"))) as server:
        server.starttls()
        server.login(
            os.getenv("SMTP_USER"),
            os.getenv("SMTP_PASS")
        )
        server.send_message(msg)
