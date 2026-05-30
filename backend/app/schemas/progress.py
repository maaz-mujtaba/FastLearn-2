from pydantic import BaseModel
from datetime import datetime

class ProgressResponse(BaseModel):
    user_id: int
    lesson_id: int
    completed_at: datetime
    passed: bool
    xp_earned: int

    class Config:
        from_attributes = True