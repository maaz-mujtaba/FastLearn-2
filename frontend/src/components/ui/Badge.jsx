import React from 'react';

const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  rounded = false,
  className = '',
}) => {
  const variants = {
    default: 'bg-dark-border text-text-secondary',
    primary: 'bg-accent-purple/20 text-accent-purple',
    success: 'bg-accent-green/20 text-accent-green',
    warning: 'bg-accent-amber/20 text-accent-amber',
    error: 'bg-accent-red/20 text-accent-red',
    premium: 'bg-gradient-to-r from-accent-purple to-accent-purpleLight text-white',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  const classes = `
    inline-flex items-center font-semibold
    ${variants[variant]}
    ${sizes[size]}
    ${rounded ? 'rounded-full' : 'rounded-btn'}
    ${className}
  `;

  return <span className={classes}>{children}</span>;
};

export default Badge;