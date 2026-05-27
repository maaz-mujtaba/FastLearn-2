import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/courses', label: 'Courses' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${
      isScrolled ? 'bg-dark-card/95 backdrop-blur-md border-b border-dark-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative group">
            <div className="text-2xl font-heading font-bold">
              <span className="text-accent-purple">fast</span>
              <span className="text-text-primary">learn</span>
              <span className="text-xs text-text-secondary ml-1">.com</span>
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-purple group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-text-secondary hover:text-accent-purple transition-colors ${
                  location.pathname === link.path ? 'text-accent-purple' : ''
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-purple"
                    transition={{ type: "spring", bounce: 0.2 }}
                  />
                )}
              </Link>
            ))}
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm">
                Login
              </Button>
              <Button variant="primary" size="sm">
                Sign Up Free
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pt-4 border-t border-dark-border"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-text-secondary hover:text-accent-purple transition-colors ${
                  location.pathname === link.path ? 'text-accent-purple' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 mt-4">
              <Button variant="ghost" fullWidth>
                Login
              </Button>
              <Button variant="primary" fullWidth>
                Sign Up Free
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;