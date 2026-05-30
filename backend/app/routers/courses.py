from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import func
from app.database import get_db
from app.models.course import Course
from app.models.lesson import Lesson
from app.models.user_progress import UserProgress
from app.routers.auth import get_current_user
from app.models.user import User
from app.schemas.course import CourseResponse, CourseWithProgress
from typing import List

router = APIRouter(prefix="/courses", tags=["Courses"])

@router.get("/", response_model=List[CourseResponse])
def get_courses(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    courses = db.query(Course).order_by(Course.order_index).all()
    return courses

@router.get("/{slug}", response_model=CourseWithProgress)
def get_course_by_slug(
    slug: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    course = db.query(Course).filter(Course.slug == slug).first()
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    
    # Get total lessons count
    total_lessons = db.query(Lesson).filter(Lesson.course_id == course.id).count()
    
    # Get completed lessons count
    completed_lessons = db.query(UserProgress).join(
        Lesson, UserProgress.lesson_id == Lesson.id
    ).filter(
        Lesson.course_id == course.id,
        UserProgress.user_id == current_user.id,
        UserProgress.passed == True
    ).count()
    
    progress_percentage = (completed_lessons / total_lessons * 100) if total_lessons > 0 else 0
    
    return CourseWithProgress(
        **course.__dict__,
        total_lessons=total_lessons,
        completed_lessons=completed_lessons,
        progress_percentage=progress_percentage
    )
