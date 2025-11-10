'use client';

import { motion, useInView, Variant, Transition } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface InViewProps {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: {
    once?: boolean;
    margin?: string;
    amount?: number | 'some' | 'all';
  };
  className?: string;
}

export function InView({
  children,
  variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  transition = { duration: 0.5, ease: 'easeInOut' },
  viewOptions = { once: true, margin: '0px' },
  className,
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: viewOptions.once ?? true,
    amount: viewOptions.amount ?? 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
