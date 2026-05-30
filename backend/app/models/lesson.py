from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime, Boolean
from sqlalchemy.sql import func
from app.database import Base

class Lesson(Base):
    __tablename__ = "lessons"

    id = Column(Integer, primary_key=True, index=True)
    course_id = Column(Integer, ForeignKey("courses.id"), nullable=False)
    title = Column(String(200), nullable=False)
    order_index = Column(Integer, nullable=False)
    content_md = Column(Text, nullable=False)  # Markdown content
    hint = Column(Text, nullable=True)
    task_description = Column(Text, nullable=False)
    starter_code = Column(Text, nullable=True)
    solution_check_type = Column(String(50), default="exact_match")  # exact_match, regex, function
    solution_value = Column(Text, nullable=False)
    xp_reward = Column(Integer, default=10)
    is_premium = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())