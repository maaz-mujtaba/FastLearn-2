from pydantic import BaseModel
from typing import Optional

class LessonBase(BaseModel):
    title: str
    content_md: str
    hint: Optional[str] = None
    task_description: str
    starter_code: Optional[str] = None
    xp_reward: int

class LessonCreate(LessonBase):
    course_id: int
    order_index: int
    solution_check_type: str
    solution_value: str

class LessonResponse(LessonBase):
    id: int
    course_id: int
    order_index: int
    is_completed: Optional[bool] = False
    is_locked: Optional[bool] = False

    class Config:
        from_attributes = True

class CodeSubmission(BaseModel):
    code: str
    lesson_id: int

class SubmissionResponse(BaseModel):
    passed: bool
    message: str
    xp_earned: int
    next_lesson_id: Optional[int] = None