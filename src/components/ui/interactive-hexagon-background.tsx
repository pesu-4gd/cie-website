'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

type InteractiveHexagonBackgroundProps = React.ComponentProps<'div'> & {
  primaryColor?: string;
  accentColor?: string;
  hexagonSize?: number;
  hexagonMargin?: number;
};

/**
 * Interactive Hexagon Background with Mouse Tracking
 * Hexagons react to mouse position with glow effects
 */
function InteractiveHexagonBackground({
  className,
  children,
  primaryColor = '#3E3C6B',
  accentColor = '#2B9EB3',
  hexagonSize = 75,
  hexagonMargin = 3,
  ...props
}: InteractiveHexagonBackgroundProps) {
  const hexagonWidth = hexagonSize;
  const hexagonHeight = hexagonSize * 1.1;
  const rowSpacing = hexagonSize * 0.8;
  const baseMarginTop = -36 - 0.275 * (hexagonSize - 100);
  const computedMarginTop = baseMarginTop + hexagonMargin;
  const oddRowMarginLeft = -(hexagonSize / 2);
  const evenRowMarginLeft = hexagonMargin / 2;

  const [gridDimensions, setGridDimensions] = React.useState({
    rows: 0,
    columns: 0,
  });
  const [mousePosition, setMousePosition] = React.useState({ x: -1000, y: -1000 }); // Start off-screen
  const [isMouseInside, setIsMouseInside] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const updateGridDimensions = React.useCallback(() => {
    const rows = Math.ceil(window.innerHeight / rowSpacing);
    const columns = Math.ceil(window.innerWidth / hexagonWidth) + 1;
    setGridDimensions({ rows, columns });
  }, [rowSpacing, hexagonWidth]);

  React.useEffect(() => {
    updateGridDimensions();
    window.addEventListener('resize', updateGridDimensions);
    return () => window.removeEventListener('resize', updateGridDimensions);
  }, [updateGridDimensions]);

  // Track mouse position
  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        setIsMouseInside(true);
      }
    },
    []
  );

  // Handle mouse leave
  const handleMouseLeave = React.useCallback(() => {
    setIsMouseInside(false);
    setMousePosition({ x: -1000, y: -1000 }); // Move mouse position off-screen
  }, []);

  // Calculate distance from hexagon CENTER to mouse
  const getDistanceFromMouse = (
    rowIndex: number,
    colIndex: number
  ): number => {
    // Calculate hexagon CENTER position
    const rowOffset = (rowIndex + 1) % 2 === 0 ? evenRowMarginLeft : oddRowMarginLeft;
    const hexCenterX = colIndex * (hexagonWidth + hexagonMargin) + rowOffset + hexagonWidth / 2;
    const hexCenterY = rowIndex * rowSpacing + computedMarginTop + hexagonHeight / 2;
    
    const distance = Math.sqrt(
      Math.pow(hexCenterX - mousePosition.x, 2) + Math.pow(hexCenterY - mousePosition.y, 2)
    );
    return distance;
  };

  return (
    <div
      ref={containerRef}
      data-slot="interactive-hexagon-background"
      className={cn('relative size-full overflow-hidden', className)}
      style={{ backgroundColor: primaryColor }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <style>{`
        :root { 
          --hexagon-margin: ${hexagonMargin}px;
          --primary-color: ${primaryColor};
          --accent-color: ${accentColor};
        }
        .hex-interactive {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, opacity;
        }
        .hex-glow {
          box-shadow: 0 0 30px ${accentColor}99, 0 0 60px ${accentColor}66;
        }
      `}</style>
      
      {/* Hexagon grid layer - behind everything */}
      <div className="absolute top-0 left-0 size-full overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {Array.from({ length: gridDimensions.rows }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            style={{
              marginTop: computedMarginTop,
              marginLeft:
                ((rowIndex + 1) % 2 === 0
                  ? evenRowMarginLeft
                  : oddRowMarginLeft) - 10,
            }}
            className="inline-flex"
          >
            {Array.from({ length: gridDimensions.columns }).map(
              (_, colIndex) => {
                const distance = getDistanceFromMouse(rowIndex, colIndex);
                // Only highlight hexagon directly under cursor
                const isDirectlyUnder = distance < 45; // Single hexagon radius

                return (
                  <div
                    key={`hexagon-${rowIndex}-${colIndex}`}
                    style={{
                      width: hexagonWidth,
                      height: hexagonHeight,
                      marginLeft: hexagonMargin,
                    }}
                    className={cn(
                      'relative hex-interactive pointer-events-none',
                      '[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]'
                    )}
                  >
                    {/* Hexagon border - ALWAYS VISIBLE (skeleton) */}
                    <div
                      className="absolute top-0 left-0 w-full h-full transition-all duration-200"
                      style={{
                        backgroundColor: accentColor,
                        opacity: isDirectlyUnder ? 0.6 : 0.12, // Visible skeleton by default
                      }}
                    />
                    
                    {/* Inner hexagon - ALWAYS VISIBLE */}
                    <div
                      className="absolute [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] transition-all duration-200"
                      style={{
                        inset: hexagonMargin,
                        backgroundColor: primaryColor,
                        opacity: 1,
                      }}
                    />

                    {/* Highlight glow - ONLY on direct hover */}
                    {isDirectlyUnder && (
                      <div
                        className="absolute inset-0 animate-pulse"
                        style={{
                          backgroundColor: accentColor,
                          opacity: 0.4,
                          filter: 'blur(12px)',
                        }}
                      />
                    )}
                  </div>
                );
              }
            )}
          </div>
        ))}
      </div>
      
      {children}
    </div>
  );
}

export { InteractiveHexagonBackground, type InteractiveHexagonBackgroundProps };
