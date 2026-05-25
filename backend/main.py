from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI(
    title="fastlearn.com API",
    description="Interactive Coding Education Platform",
    version="1.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        os.getenv("FRONTEND_URL", "http://localhost:5173")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "Welcome to fastlearn.com API",
        "status": "operational",
        "version": "1.0.0"
    }

@app.get("/health")
def health_check():
    return {"status": "healthy"}