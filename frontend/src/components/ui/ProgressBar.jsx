import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ 
  value = 0, 
  max = 100,
  showLabel = true,
  size = 'md',
  color = 'purple',
  animated = true,
  className = '',
}) => {
  const percentage = (value / max) * 100;

  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
    xl: 'h-4',
  };

  const colors = {
    purple: 'bg-accent-purple',
    green: 'bg-accent-green',
    amber: 'bg-accent-amber',
    red: 'bg-accent-red',
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-2 text-sm">
          <span className="text-text-secondary">Progress</span>
          <span className="text-accent-purple font-semibold">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`bg-dark-border rounded-full overflow-hidden ${sizes[size]}`}>
        <motion.div
          className={`${colors[color]} rounded-full ${sizes[size]}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: animated ? 0.5 : 0, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;