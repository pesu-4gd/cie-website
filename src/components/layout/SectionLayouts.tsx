'use client';

import { ReactNode } from 'react';
import { HexagonBackground } from '@/components/ui/hexagon-background';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionLayoutProps {
  children: ReactNode;
  className?: string;
}

interface HeroSectionProps {
  badge?: {
    icon?: ReactNode;
    text: string;
  };
  title: string | ReactNode;
  subtitle: string;
  className?: string;
  contentClassName?: string;
  hexagonClassName?: string;
}

/**
 * Main section wrapper for consistent spacing and layout
 */
export function SectionLayout({ children, className }: SectionLayoutProps) {
  return (
    <div className={cn('min-h-screen bg-gray-50', className)}>
      {children}
    </div>
  );
}

/**
 * Hero section with hexagonal background
 * Used across Students, Alumni, Industry, Inside CIE sections
 */
export function HeroSection({
  badge,
  title,
  subtitle,
  className,
  contentClassName,
  hexagonClassName,
}: HeroSectionProps) {
  return (
    <HexagonBackground
      className={cn(
        'relative min-h-[60vh] flex items-center justify-center',
        hexagonClassName,
      )}
      hexagonSize={75}
      hexagonMargin={3}
    >
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3E3C6B]/90 via-[#2B9EB3]/80 to-[#3E3C6B]/90" />
      
      <div className={cn('relative z-10 max-w-7xl mx-auto px-6 text-center', className)}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={cn('space-y-6', contentClassName)}
        >
          {badge && (
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                {badge.icon}
                {badge.text}
              </span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </HexagonBackground>
  );
}

/**
 * Content section wrapper for consistent spacing
 */
export function ContentSection({
  children,
  className,
}: SectionLayoutProps) {
  return (
    <section className={cn('py-20', className)}>
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

/**
 * Section header component
 */
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={cn('text-center mb-16', className)}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
