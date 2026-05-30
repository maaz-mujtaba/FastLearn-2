from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.lesson import Lesson
from app.models.user_progress import UserProgress
from app.models.user import User
from app.routers.auth import get_current_user
from app.schemas.lesson import LessonResponse, CodeSubmission, SubmissionResponse
from typing import List
import re

router = APIRouter(prefix="/lessons", tags=["Lessons"])

@router.get("/course/{course_id}", response_model=List[LessonResponse])
def get_lessons_by_course(
    course_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    lessons = db.query(Lesson).filter(Lesson.course_id == course_id).order_by(Lesson.order_index).all()
    
    # Get completed lesson IDs
    completed = db.query(UserProgress.lesson_id).filter(
        UserProgress.user_id == current_user.id,
        UserProgress.passed == True
    ).all()
    completed_ids = [c[0] for c in completed]
    
    # Add completion status
    result = []
    for i, lesson in enumerate(lessons):
        is_completed = lesson.id in completed_ids
        # Lock lessons that are not yet available (can't skip ahead)
        is_locked = not is_completed and i > 0 and lessons[i-1].id not in completed_ids
        
        result.append(LessonResponse(
            **lesson.__dict__,
            is_completed=is_completed,
            is_locked=is_locked
        ))
    
    return result

@router.get("/{lesson_id}", response_model=LessonResponse)
def get_lesson(
    lesson_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    lesson = db.query(Lesson).filter(Lesson.id == lesson_id).first()
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")
    
    # Check if completed
    completed = db.query(UserProgress).filter(
        UserProgress.user_id == current_user.id,
        UserProgress.lesson_id == lesson_id,
        UserProgress.passed == True
    ).first()
    
    return LessonResponse(
        **lesson.__dict__,
        is_completed=completed is not None,
        is_locked=False  # Implement locking logic here
    )

def validate_code(submission: str, solution_type: str, solution_value: str) -> bool:
    """Validate user's code against solution"""
    if solution_type == "exact_match":
        return submission.strip() == solution_value.strip()
    elif solution_type == "regex":
        return bool(re.search(solution_value, submission, re.IGNORECASE | re.MULTILINE))
    elif solution_type == "contains":
        return solution_value in submission
    else:
        return False

@router.post("/submit", response_model=SubmissionResponse)
def submit_code(
    submission: CodeSubmission,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    lesson = db.query(Lesson).filter(Lesson.id == submission.lesson_id).first()
    if not lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")
    
    # Check if already completed
    existing = db.query(UserProgress).filter(
        UserProgress.user_id == current_user.id,
        UserProgress.lesson_id == submission.lesson_id
    ).first()
    
    if existing and existing.passed:
        return SubmissionResponse(
            passed=True,
            message="✅ You've already completed this lesson!",
            xp_earned=0,
            next_lesson_id=None
        )
    
    # Validate the code
    passed = validate_code(
        submission.code,
        lesson.solution_check_type,
        lesson.solution_value
    )
    
    if passed:
        # Save progress
        progress = UserProgress(
            user_id=current_user.id,
            lesson_id=submission.lesson_id,
            code_submitted=submission.code,
            passed=True,
            xp_earned=lesson.xp_reward
        )
        db.add(progress)
        
        # Update user XP
        current_user.total_xp += lesson.xp_reward
        db.commit()
        
        # Get next lesson
        next_lesson = db.query(Lesson).filter(
            Lesson.course_id == lesson.course_id,
            Lesson.order_index > lesson.order_index
        ).order_by(Lesson.order_index).first()
        
        return SubmissionResponse(
            passed=True,
            message=f"🎉 Correct! You earned {lesson.xp_reward} XP!",
            xp_earned=lesson.xp_reward,
            next_lesson_id=next_lesson.id if next_lesson else None
        )
    else:
        return SubmissionResponse(
            passed=False,
            message="❌ Not quite right. Check your code and try again!",
            xp_earned=0,
            next_lesson_id=None
        )
    