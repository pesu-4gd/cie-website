'use client';

import React, { createContext, useContext, useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface CarouselContextType {
  index: number;
  setIndex: (index: number) => void;
  itemsCount: number;
  setItemsCount: (count: number) => void;
}

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a Carousel');
  }
  return context;
}

interface CarouselProps {
  children: React.ReactNode;
  index?: number;
  onIndexChange?: (index: number) => void;
  className?: string;
}

export function Carousel({ children, index: controlledIndex, onIndexChange, className }: CarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);

  const index = controlledIndex ?? internalIndex;
  const setIndex = useCallback((newIndex: number) => {
    if (onIndexChange) {
      onIndexChange(newIndex);
    } else {
      setInternalIndex(newIndex);
    }
  }, [onIndexChange]);

  return (
    <CarouselContext.Provider value={{ index, setIndex, itemsCount, setItemsCount }}>
      <div className={cn('relative', className)}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

interface CarouselContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CarouselContent({ children, className }: CarouselContentProps) {
  const { index, setItemsCount } = useCarousel();
  
  const childrenArray = React.Children.toArray(children);
  
  useEffect(() => {
    setItemsCount(childrenArray.length);
  }, [childrenArray.length, setItemsCount]);

  return (
    <div className={cn('overflow-hidden', className)}>
      <div 
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {childrenArray}
      </div>
    </div>
  );
}

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
}

export function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <div className={cn('min-w-full flex-shrink-0', className)}>
      {children}
    </div>
  );
}

interface CarouselIndicatorsProps {
  className?: string;
}

export function CarouselIndicators({ className }: CarouselIndicatorsProps) {
  const { index, setIndex, itemsCount } = useCarousel();

  return (
    <div className={cn('flex justify-center space-x-2', className)}>
      {Array.from({ length: itemsCount }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => setIndex(i)}
          className={cn(
            'w-2 h-2 rounded-full transition-colors',
            index === i ? 'bg-primary' : 'bg-gray-300'
          )}
        />
      ))}
    </div>
  );
}