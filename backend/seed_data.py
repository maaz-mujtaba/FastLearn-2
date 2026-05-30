from app.database import SessionLocal
from app.models.course import Course
from app.models.lesson import Lesson
from datetime import datetime

def seed_courses():
    db = SessionLocal()
    
    courses = [
        {
            "slug": "html",
            "title": "HTML",
            "description": "Learn the structure of the web. Build your first webpage from scratch.",
            "icon": "🌐",
            "color": "purple",
            "order_index": 1,
            "is_premium": False
        },
        {
            "slug": "css",
            "title": "CSS",
            "description": "Style your websites beautifully with modern CSS techniques.",
            "icon": "🎨",
            "color": "green",
            "order_index": 2,
            "is_premium": False
        },
        {
            "slug": "javascript",
            "title": "JavaScript",
            "description": "Make your websites interactive with programming fundamentals.",
            "icon": "⚡",
            "color": "amber",
            "order_index": 3,
            "is_premium": False
        },
        {
            "slug": "react",
            "title": "React.js",
            "description": "Build modern single-page applications with React.",
            "icon": "⚛️",
            "color": "purple",
            "order_index": 4,
            "is_premium": True
        },
        {
            "slug": "fastapi",
            "title": "FastAPI",
            "description": "Create blazing fast APIs with Python.",
            "icon": "🚀",
            "color": "green",
            "order_index": 5,
            "is_premium": True
        },
        {
            "slug": "java",
            "title": "Java",
            "description": "Master object-oriented programming with Java.",
            "icon": "☕",
            "color": "amber",
            "order_index": 6,
            "is_premium": True
        }
    ]
    
    for course_data in courses:
        course = db.query(Course).filter(Course.slug == course_data["slug"]).first()
        if not course:
            course = Course(**course_data)
            db.add(course)
    
    db.commit()
    print("✅ Courses seeded successfully!")
    db.close()

def seed_sample_lessons():
    db = SessionLocal()
    
    # Get HTML course
    html_course = db.query(Course).filter(Course.slug == "html").first()
    
    if html_course:
        sample_lessons = [
            {
                "course_id": html_course.id,
                "title": "Your First HTML Page",
                "order_index": 1,
                "content_md": """
# Your First HTML Page

HTML (HyperText Markup Language) is the standard markup language for creating web pages.

## What you'll learn:
- Basic HTML structure
- Headings and paragraphs
- Your first webpage

Let's create your first HTML page!
                """,
                "hint": "Remember: All HTML documents start with <!DOCTYPE html>",
                "task_description": "Create a basic HTML page with a heading that says 'Hello, World!'",
                "starter_code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Page</title>\n</head>\n<body>\n    \n</body>\n</html>",
                "solution_check_type": "contains",
                "solution_value": "<h1>Hello, World!</h1>",
                "xp_reward": 10
            },
            {
                "course_id": html_course.id,
                "title": "Working with Text",
                "order_index": 2,
                "content_md": """
# Working with Text in HTML

HTML provides various tags for formatting text.

## Text Formatting Tags:
- `<h1>` to `<h6>`: Headings
- `<p>`: Paragraphs
- `<strong>`: Bold text
- `<em>`: Italic text
                """,
                "hint": "Use <p> tags for paragraphs",
                "task_description": "Create a paragraph that says 'HTML is fun!'",
                "starter_code": "<!DOCTYPE html>\n<html>\n<body>\n    \n</body>\n</html>",
                "solution_check_type": "contains",
                "solution_value": "<p>HTML is fun!</p>",
                "xp_reward": 10
            }
        ]
        
        for lesson_data in sample_lessons:
            lesson = db.query(Lesson).filter(
                Lesson.course_id == html_course.id,
                Lesson.order_index == lesson_data["order_index"]
            ).first()
            if not lesson:
                lesson = Lesson(**lesson_data)
                db.add(lesson)
        
        db.commit()
        print("✅ Sample lessons seeded successfully!")
    
    db.close()

if __name__ == "__main__":
    seed_courses()
    seed_sample_lessons()
    print("🎉 Database seeding complete!")