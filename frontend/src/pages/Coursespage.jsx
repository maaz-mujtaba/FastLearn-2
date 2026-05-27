import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';

const CoursesPage = () => {
  const [filter, setFilter] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'HTML',
      description: 'Learn the structure of the web. Build your first webpage.',
      level: 'Beginner',
      lessons: 20,
      duration: '2 hours',
      icon: '🌐',
      color: 'accent-purple',
      progress: 0,
    },
    {
      id: 2,
      title: 'CSS',
      description: 'Style your websites beautifully with modern CSS.',
      level: 'Beginner',
      lessons: 15,
      duration: '2.5 hours',
      icon: '🎨',
      color: 'accent-green',
      progress: 0,
    },
    {
      id: 3,
      title: 'JavaScript',
      description: 'Make your websites interactive with programming fundamentals.',
      level: 'Intermediate',
      lessons: 15,
      duration: '3 hours',
      icon: '⚡',
      color: 'accent-amber',
      progress: 0,
    },
    {
      id: 4,
      title: 'React.js',
      description: 'Build modern single-page applications with React.',
      level: 'Intermediate',
      lessons: 10,
      duration: '3 hours',
      icon: '⚛️',
      color: 'accent-purple',
      progress: 0,
      isPremium: true,
    },
    {
      id: 5,
      title: 'FastAPI',
      description: 'Create blazing fast APIs with Python.',
      level: 'Advanced',
      lessons: 10,
      duration: '3 hours',
      icon: '🚀',
      color: 'accent-green',
      progress: 0,
      isPremium: true,
    },
    {
      id: 6,
      title: 'Java',
      description: 'Master object-oriented programming with Java.',
      level: 'Intermediate',
      lessons: 10,
      duration: '3.5 hours',
      icon: '☕',
      color: 'accent-amber',
      progress: 0,
      isPremium: true,
    },
  ];

  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(c => c.level.toLowerCase() === filter);

  return (
    <div className="pt-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-accent-purple">Learning Path</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Start with the basics and work your way up to advanced topics.
            All courses are project-based and hands-on.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { value: 'all', label: 'All Courses' },
            { value: 'beginner', label: 'Beginner' },
            { value: 'intermediate', label: 'Intermediate' },
            { value: 'advanced', label: 'Advanced' },
          ].map((filterOption) => (
            <button
              key={filterOption.value}
              onClick={() => setFilter(filterOption.value)}
              className={`px-4 py-2 rounded-btn transition-all duration-200 ${
                filter === filterOption.value
                  ? 'bg-accent-purple text-white'
                  : 'bg-dark-card text-text-secondary hover:text-accent-purple'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hoverable className="h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl">{course.icon}</div>
                  <div className="flex gap-2">
                    <Badge variant={
                      course.level === 'Beginner' ? 'success' : 
                      course.level === 'Advanced' ? 'error' : 'warning'
                    }>
                      {course.level}
                    </Badge>
                    {course.isPremium && (
                      <Badge variant="premium">Premium</Badge>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{course.description}</p>
                
                <div className="flex justify-between text-sm text-text-secondary mb-4">
                  <span>📚 {course.lessons} lessons</span>
                  <span>⏱️ {course.duration}</span>
                </div>

                {course.progress > 0 && (
                  <div className="mb-4">
                    <ProgressBar value={course.progress} max={100} size="sm" />
                  </div>
                )}

                <Link to={`/course/${course.title.toLowerCase()}`}>
                  <Button variant={course.progress > 0 ? 'secondary' : 'primary'} fullWidth>
                    {course.progress > 0 ? 'Continue Learning →' : 'Start Course →'}
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Premium CTA */}
        <div className="mt-12 text-center">
          <Card variant="gradient" className="p-8">
            <h3 className="text-2xl font-bold mb-2">Want More?</h3>
            <p className="text-text-secondary mb-4">
              Upgrade to Premium to unlock all courses, get certificates, and remove ads!
            </p>
            <Link to="/pricing">
              <Button variant="primary" size="lg">
                View Premium Plans
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;