'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: 'words' | 'chars';
  direction?: 'top' | 'bottom';
  className?: string;
}

export function BlurText({
  text,
  delay = 150,
  animateBy = 'words',
  direction = 'top',
  className = '',
}: BlurTextProps) {
  const elements = useMemo(() => {
    if (animateBy === 'words') {
      return text.split(' ');
    }
    return text.split('');
  }, [text, animateBy]);

  const variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      y: direction === 'top' ? -20 : 20,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
    },
  };

  return (
    <div className={`text-2xl md:text-3xl font-medium text-text/80 ${className}`}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            duration: 0.6,
            delay: (index * delay) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {element}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </div>
  );
}

