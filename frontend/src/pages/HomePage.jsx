import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const HomePage = () => {
  const features = [
    {
      icon: '✍️',
      title: 'Write Real Code',
      description: 'Every lesson includes hands-on coding. No passive reading.',
    },
    {
      icon: '⚡',
      title: 'Instant Feedback',
      description: 'Run your code and see results immediately.',
    },
    {
      icon: '🎯',
      title: 'Micro-Lessons',
      description: 'Each lesson takes under 5 minutes to complete.',
    },
    {
      icon: '🏆',
      title: 'Earn XP & Streaks',
      description: 'Stay motivated with gamification.',
    },
    {
      icon: '📜',
      title: 'Get Certified',
      description: 'Download certificates on course completion.',
    },
    {
      icon: '🎓',
      title: '6 Full Courses',
      description: 'HTML, CSS, JS, React, FastAPI, Java.',
    },
  ];

  const courses = [
    { name: 'HTML', level: 'Beginner', lessons: 20, color: 'accent-purple' },
    { name: 'CSS', level: 'Beginner', lessons: 15, color: 'accent-green' },
    { name: 'JavaScript', level: 'Intermediate', lessons: 15, color: 'accent-amber' },
    { name: 'React.js', level: 'Intermediate', lessons: 10, color: 'accent-purple' },
    { name: 'FastAPI', level: 'Advanced', lessons: 10, color: 'accent-green' },
    { name: 'Java', level: 'Intermediate', lessons: 10, color: 'accent-amber' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-transparent" />
        <div className="container mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="premium" size="lg" rounded className="mb-6">
              🚀 Start Learning Today - Free!
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Learn to Code
              <span className="text-accent-purple block mt-2">Interactively</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Write real code from the first lesson. Get instant feedback. 
              Earn certificates. All for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="primary" size="lg">
                  Start Learning Free
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="secondary" size="lg">
                  View All Courses
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '6', label: 'Courses' },
              { value: '80+', label: 'Lessons' },
              { value: '100%', label: 'Free to Start' },
              { value: '24/7', label: 'Access' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-accent-purple">{stat.value}</div>
                <div className="text-text-secondary mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-accent-purple">fastlearn</span>?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Built on proven learning psychology principles to help you code faster
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hoverable className="h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-dark-card px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Will You <span className="text-accent-purple">Learn</span>?
            </h2>
            <p className="text-text-secondary text-lg">
              From zero to job-ready with our comprehensive curriculum
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hoverable>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{course.name}</h3>
                    <Badge variant={course.level === 'Beginner' ? 'success' : course.level === 'Advanced' ? 'error' : 'warning'}>
                      {course.level}
                    </Badge>
                  </div>
                  <p className="text-text-secondary mb-4">{course.lessons} lessons</p>
                  <Button variant="outline" fullWidth>
                    Start Learning →
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card variant="gradient" className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Coding Journey?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are building real skills, one lesson at a time.
            </p>
            <Button variant="primary" size="lg">
              Create Free Account Now
            </Button>
            <p className="text-text-tertiary text-sm mt-4">
              No credit card required. Start coding in 30 seconds.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;