import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <nav className="bg-dark-card border-b border-dark-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-heading font-bold">
            <span className="text-accent-purple">fast</span>
            <span className="text-text-primary">learn</span>
            <span className="text-xs text-text-secondary ml-1">.com</span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/courses" className="text-text-secondary hover:text-accent-purple transition-colors">
              Courses
            </Link>
            <Link to="/pricing" className="text-text-secondary hover:text-accent-purple transition-colors">
              Pricing
            </Link>
            <Link to="/dashboard" className="text-text-secondary hover:text-accent-purple transition-colors">
              Dashboard
            </Link>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex space-x-3">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="btn-secondary">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Sign Up Free
                </Link>
              </>
            ) : (
              <button className="btn-secondary">
                Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;