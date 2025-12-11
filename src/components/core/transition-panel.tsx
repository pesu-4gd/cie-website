'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, Transition, Variants } from 'framer-motion';

interface TransitionPanelProps {
  children: React.ReactNode[];
  activeIndex: number;
  transition?: Transition;
  variants?: Variants;
  className?: string;
}

export function TransitionPanel({
  children,
  activeIndex,
  transition = { duration: 0.3, ease: 'easeInOut' },
  variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  className = '',
}: TransitionPanelProps) {
  const [currentIndex, setCurrentIndex] = useState(activeIndex);

  useEffect(() => {
    setCurrentIndex(activeIndex);
  }, [activeIndex]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
        >
          {React.Children.toArray(children)[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
