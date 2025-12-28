'use client';

import { motion } from 'framer-motion';

interface SomaliStarProps {
  color?: string;
  size?: string;
  opacity?: number;
  showRing?: boolean;
  className?: string;
}

export function SomaliStar({ 
  color = '#1f6feb', 
  size = 'w-96 h-96',
  opacity = 0.1,
  showRing = true,
  className = ''
}: SomaliStarProps = {}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity, scale: 1 }}
      transition={{ duration: 1.5 }}
      className={`${size} ${className}`}
    >
      <svg
        viewBox="0 0 200 200"
        className={`w-full h-full ${showRing ? 'glow-accent' : ''}`}
        style={{ color }}
      >
        {/* Somali Star - 5-pointed star */}
        <motion.path
          d="M100,20 L115,75 L170,75 L125,110 L140,165 L100,130 L60,165 L75,110 L30,75 L85,75 Z"
          fill="currentColor"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: opacity * 2 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        
        {/* Rotating ring */}
        {showRing && (
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.1"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ originX: '100px', originY: '100px' }}
          />
        )}
      </svg>
    </motion.div>
  );
}

