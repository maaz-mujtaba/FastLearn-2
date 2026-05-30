from sqlalchemy import Column, Integer, String, DateTime, Boolean, BigInteger
from sqlalchemy.sql import func
from app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    name = Column(String(100), nullable=False)
    avatar_url = Column(String(500), nullable=True)
    plan = Column(String(20), default="free")  # free or premium
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    streak_count = Column(Integer, default=0)
    last_active_date = Column(DateTime(timezone=True), nullable=True)
    total_xp = Column(BigInteger, default=0)
    is_active = Column(Boolean, default=True)
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())