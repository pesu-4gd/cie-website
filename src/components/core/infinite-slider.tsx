'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface InfiniteSliderProps {
  children: ReactNode;
  gap?: number;
  duration?: number;
  reverse?: boolean;
  className?: string;
}

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  reverse = false,
  className = ''
}: Readonly<InfiniteSliderProps>) {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Clone children for seamless loop
    const items = Array.from(slider.children);
    for (const item of items) {
      const clone = item.cloneNode(true) as HTMLElement;
      slider.appendChild(clone);
    }
  }, []);

  const animationStyle = `scroll-${reverse ? 'reverse' : 'forward'} ${duration}s linear infinite ${isPaused ? 'paused' : 'running'}`;

  return (
    <>
      <style>{`
        @keyframes scroll-forward {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
      <div className={`relative overflow-hidden ${className}`}>
        <div
          ref={sliderRef}
          className="flex items-center"
          style={{
            gap: `${gap}px`,
            animation: animationStyle
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Partner logos carousel"
        >
          {children}
        </div>
      </div>
    </>
  );
}
