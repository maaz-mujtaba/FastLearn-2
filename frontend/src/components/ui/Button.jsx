import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-accent-purple hover:bg-accent-purpleDark text-white',
    secondary: 'bg-dark-card border border-dark-border hover:border-accent-purple text-text-primary',
    outline: 'border-2 border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white',
    ghost: 'text-text-secondary hover:text-accent-purple hover:bg-dark-hover',
    danger: 'bg-accent-red hover:bg-accent-redDark text-white',
    success: 'bg-accent-green hover:bg-accent-greenDark text-white',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  const baseClasses = `
    font-semibold rounded-btn transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-accent-purple focus:ring-offset-2 focus:ring-offset-dark-bg
    disabled:opacity-50 disabled:cursor-not-allowed
    inline-flex items-center justify-center gap-2
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${loading ? 'cursor-wait' : ''}
    ${className}
  `;

  return (
    <motion.button
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {Icon && iconPosition === 'left' && !loading && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && !loading && <Icon className="w-5 h-5" />}
    </motion.button>
  );
};

export default Button;