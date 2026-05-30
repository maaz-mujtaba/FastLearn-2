from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List

class CourseBase(BaseModel):
    slug: str
    title: str
    description: str
    icon: str
    color: str
    order_index: int
    is_premium: bool

class CourseCreate(CourseBase):
    pass

class CourseResponse(CourseBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class CourseWithProgress(CourseResponse):
    total_lessons: int
    completed_lessons: int
    progress_percentage: float