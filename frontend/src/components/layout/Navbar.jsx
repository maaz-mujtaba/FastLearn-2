import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-text-secondary hover:text-accent-purple transition-colors ${
                  location.pathname === link.path ? 'text-accent-purple' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex space-x-3">
              <Link to="/login" className="px-4 py-2 text-text-secondary hover:text-accent-purple">
                Login
              </Link>
              <Link to="/register" className="bg-accent-purple text-white px-4 py-2 rounded-btn font-semibold hover:bg-opacity-80">
                Sign Up Free
              </Link>
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
          <div className="md:hidden mt-4 pt-4 border-t border-dark-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 text-text-secondary hover:text-accent-purple"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 mt-4">
              <Link to="/login" className="text-center px-4 py-2 text-text-secondary hover:text-accent-purple">
                Login
              </Link>
              <Link to="/register" className="text-center bg-accent-purple text-white px-4 py-2 rounded-btn font-semibold">
                Sign Up Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;