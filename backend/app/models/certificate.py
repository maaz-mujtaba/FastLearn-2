from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Text
from sqlalchemy.sql import func
from app.database import Base

class Certificate(Base):
    __tablename__ = "certificates"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    course_id = Column(Integer, ForeignKey("courses.id"), nullable=False)
    issued_at = Column(DateTime(timezone=True), server_default=func.now())
    certificate_url = Column(String(500), nullable=False)
    verification_code = Column(String(100), unique=True, index=True, nullable=False)
    pdf_data = Column(Text, nullable=True)  # Base64 encoded PDF