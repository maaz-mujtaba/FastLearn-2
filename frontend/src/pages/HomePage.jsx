import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: '✍️',
      title: 'Write Real Code',
      description: 'Every lesson includes hands-on coding exercises. No passive reading, just active learning.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '⚡',
      title: 'Instant Feedback',
      description: 'Run your code and see results immediately. Learn faster with real-time validation.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '🎯',
      title: 'Micro-Lessons',
      description: 'Each lesson takes under 5 minutes. Perfect for busy schedules and focused learning.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: '🏆',
      title: 'Earn XP & Streaks',
      description: 'Stay motivated with gamification. Build habits and track your progress daily.',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: '📜',
      title: 'Get Certified',
      description: 'Download verified certificates on course completion. Showcase your skills.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🎓',
      title: '6 Full Courses',
      description: 'From HTML to Java. Comprehensive curriculum covering modern web development.',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  const stats = [
    { value: '6', label: 'Comprehensive Courses', icon: '📚' },
    { value: '80+', label: 'Interactive Lessons', icon: '📖' },
    { value: '100%', label: 'Free to Start', icon: '🎁' },
    { value: '24/7', label: 'Learn Anytime', icon: '🌙' },
  ];

  return (
    <div className="pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-transparent" />
        <div 
          className="absolute w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x / 50}px, ${mousePosition.y / 50}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-accent-purple/10 rounded-full border border-accent-purple/20 animate-glow">
              <span className="text-accent-purple font-semibold">🚀 Join 10,000+ Learners Worldwide</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Learn to Code
              <span className="gradient-text block mt-2 animate-float">Interactively</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              Write real code from the first lesson. Get instant feedback. 
              <span className="gradient-text font-semibold"> Earn certificates.</span> All for free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/register">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-3"
                >
                  Start Learning Free
                  <span className="ml-2">→</span>
                </motion.button>
              </Link>
              <Link to="/courses">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-3"
                >
                  View All Courses
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Cards */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">fastlearn</span>?
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Built on proven learning psychology principles to help you code faster
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card group cursor-pointer"
              >
                <div className={`text-5xl mb-4 inline-block bg-gradient-to-r ${feature.color} p-4 rounded-2xl group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-purple transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-accent-purple text-sm font-semibold">
                    Learn more →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-20 px-4 bg-dark-card/50">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popular <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Start with the fundamentals and build your future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'HTML & CSS', level: 'Beginner', lessons: 35, icon: '🎨', color: 'from-purple-500 to-pink-500' },
              { name: 'JavaScript', level: 'Intermediate', lessons: 25, icon: '⚡', color: 'from-yellow-500 to-orange-500' },
              { name: 'React.js', level: 'Advanced', lessons: 20, icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
            ].map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                <div className={`text-5xl mb-4 bg-gradient-to-r ${course.color} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-accent-purple/20 text-accent-purple text-xs rounded-full">
                    {course.level}
                  </span>
                  <span className="text-text-secondary text-sm">
                    {course.lessons} lessons
                  </span>
                </div>
                <p className="text-text-secondary mb-4">
                  Master {course.name} with hands-on projects and real-world examples.
                </p>
                <Link to={`/course/${course.name.toLowerCase()}`}>
                  <button className="w-full btn-secondary text-sm">
                    Start Course
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent-purple/20 via-accent-purple/10 to-transparent p-12 text-center border border-accent-purple/20"
          >
            <div className="absolute inset-0 bg-grid-white/5" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              Ready to Start Your{" "}
              <span className="gradient-text">Coding Journey</span>?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto relative">
              Join thousands of learners who are building real skills, one lesson at a time.
            </p>
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-3 relative"
              >
                Create Free Account Now
                <span className="ml-2">🎉</span>
              </motion.button>
            </Link>
            <p className="text-text-tertiary text-sm mt-4 relative">
              No credit card required. Start coding in 30 seconds.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;