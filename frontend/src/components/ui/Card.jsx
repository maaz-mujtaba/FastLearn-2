import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  variant = 'default',
  hoverable = false,
  className = '',
  onClick,
  ...props 
}) => {
  const variants = {
    default: 'bg-dark-card border border-dark-border',
    gradient: 'bg-gradient-to-br from-dark-card to-dark-muted border border-dark-border',
    elevated: 'bg-dark-card border border-dark-border shadow-lg',
  };

  const baseClasses = `
    rounded-card overflow-hidden transition-all duration-200
    ${variants[variant]}
    ${hoverable ? 'hover:border-accent-purple hover:scale-[1.02] cursor-pointer' : ''}
    ${className}
  `;

  const Component = onClick ? 'button' : 'div';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={baseClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;