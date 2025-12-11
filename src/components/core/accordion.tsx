'use client';

import * as React from 'react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import { createContext, useContext } from 'react';

interface AccordionContextValue {
  expandedValue: string | null;
  onValueChange: (value: string) => void;
  transition?: Transition;
  variants?: Variants;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(
  undefined
);

interface AccordionItemContextValue {
  value: string;
  isExpanded: boolean;
}

const AccordionItemContext = createContext<
  AccordionItemContextValue | undefined
>(undefined);

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  transition?: Transition;
  variants?: Variants;
}

export function Accordion({
  children,
  className,
  transition,
  variants,
}: AccordionProps) {
  const [expandedValue, setExpandedValue] = React.useState<string | null>(null);

  const onValueChange = (value: string) => {
    setExpandedValue((prev) => (prev === value ? null : value));
  };

  return (
    <AccordionContext.Provider
      value={{ expandedValue, onValueChange, transition, variants }}
    >
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function AccordionItem({
  children,
  value,
  className,
}: AccordionItemProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion');
  }

  const isExpanded = context.expandedValue === value;

  return (
    <AccordionItemContext.Provider value={{ value, isExpanded }}>
      <div className={className} data-expanded={isExpanded ? '' : undefined}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionTrigger({
  children,
  className,
}: AccordionTriggerProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionTrigger must be used within an Accordion');
  }

  const itemContext = useContext(AccordionItemContext);
  if (!itemContext) {
    throw new Error('AccordionTrigger must be used within an AccordionItem');
  }

  return (
    <button
      type="button"
      className={`group ${className}`}
      onClick={() => context.onValueChange(itemContext.value)}
      data-expanded={itemContext.isExpanded ? '' : undefined}
    >
      {children}
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({
  children,
  className,
}: AccordionContentProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionContent must be used within an Accordion');
  }

  const itemContext = useContext(AccordionItemContext);
  if (!itemContext) {
    throw new Error('AccordionContent must be used within an AccordionItem');
  }

  const defaultVariants: Variants = {
    expanded: {
      opacity: 1,
      height: 'auto',
    },
    collapsed: {
      opacity: 0,
      height: 0,
    },
  };

  const defaultTransition: Transition = {
    type: 'spring',
    stiffness: 120,
    damping: 20,
  };

  return (
    <AnimatePresence initial={false}>
      {itemContext.isExpanded && (
        <motion.div
          initial="collapsed"
          animate="expanded"
          exit="collapsed"
          variants={context.variants || defaultVariants}
          transition={context.transition || defaultTransition}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
