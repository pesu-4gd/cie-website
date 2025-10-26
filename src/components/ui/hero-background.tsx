"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useImageSlideshow } from '@/lib/hooks/useImageSlideshow';
import { InteractiveHexagonBackground } from '@/components/ui/interactive-hexagon-background';
import { SECTION_COLORS } from '@/styles/colors';

interface HeroBackgroundProps {
  section: 'students' | 'alumni' | 'industry' | 'inside-cie' | 'landing';
  children: React.ReactNode;
  className?: string;
  overlayOpacity?: number;
  intervalMs?: number;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  section,
  children,
  className = '',
  overlayOpacity = 0.7,
  intervalMs = 3000
}) => {
  const { 
    currentImage, 
    currentImageIndex, 
    totalImages, 
    isLoading
  } = useImageSlideshow(section, intervalMs);

  // map section prop to SECTION_COLORS key
  const sectionKey = section === 'inside-cie' ? 'insideCie' : (section as keyof typeof SECTION_COLORS);
  const colors = SECTION_COLORS[sectionKey as keyof typeof SECTION_COLORS] ?? SECTION_COLORS.landing;

  return (
    <section 
      className={`relative h-[85vh] flex items-center overflow-hidden ${className}`}
    >
      {/* Interactive hexagon layer */}
      <InteractiveHexagonBackground
        className="absolute inset-0 z-0"
        primaryColor={colors.hero.background}
        accentColor={colors.hero.hexagonAccent}
      />
      {/* Image Slideshow Background */}
      <div className="absolute inset-0 z-0">
        {!isLoading && currentImage && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ 
                duration: 0.8,
                ease: "easeInOut"
              }}
              className="absolute inset-0"
            >
              <img
                src={currentImage}
                alt={`${section} hero background ${currentImageIndex + 1}`}
                className="w-full h-full object-cover object-center"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </motion.div>
          </AnimatePresence>
        )}
        
        {/* Fallback background while loading */}
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
        )}
      </div>

      {/* Overlay */}
      <div 
        className="absolute inset-0 z-10 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-indigo-900/80"
        style={{ 
          background: `linear-gradient(135deg, 
            rgba(30, 58, 138, ${overlayOpacity}) 0%, 
            rgba(37, 99, 235, ${overlayOpacity * 0.8}) 50%, 
            rgba(67, 56, 202, ${overlayOpacity}) 100%)`
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full py-20">
        {children}
      </div>

      {/* Auto-advance Progress Indicators */}
      {!isLoading && totalImages > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex space-x-2">
            {Array.from({ length: totalImages }).map((_, index) => (
              <div
                key={`indicator-${index}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          <div className="text-center mt-2">
            <span className="text-white/70 text-xs">
              Auto-advance • {currentImageIndex + 1} of {totalImages}
            </span>
          </div>
        </div>
      )}

      {/* Auto-advance Progress Bar */}
      {!isLoading && totalImages > 1 && (
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <div className="h-1 bg-white/20">
            <motion.div
              className="h-full bg-white/60"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ 
                duration: intervalMs / 1000,
                ease: "linear",
                repeat: Infinity
              }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
        </div>
      )}
    </section>
  );
};