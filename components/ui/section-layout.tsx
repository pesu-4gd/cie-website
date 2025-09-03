'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface SectionLayoutProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'alternate' | 'dark' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export function SectionLayout({
  children,
  className,
  variant = 'default',
  padding = 'lg',
  maxWidth = 'xl'
}: SectionLayoutProps) {
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };
  
  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-8xl',
    full: 'max-w-full'
  };
  
  const variantClasses = {
    default: 'bg-white',
    alternate: 'cie-section-alt',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
  };
  
  return (
    <section className={cn(
      paddingClasses[padding],
      variantClasses[variant],
      className
    )}>
      <div className={cn(
        'container mx-auto px-4',
        maxWidthClasses[maxWidth]
      )}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  icon?: LucideIcon;
  badge?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = false,
  icon: Icon,
  badge,
  className
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      {badge && (
        <div className={cn(
          'inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4',
          centered && 'justify-center'
        )}>
          {Icon && <Icon className="w-4 h-4" />}
          {badge}
        </div>
      )}
      
      {subtitle && (
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-3">
          {subtitle}
        </p>
      )}
      
      <h2 className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
        'cie-heading'
      )}>
        {title}
      </h2>
      
      {description && (
        <p className={cn(
          'text-lg text-gray-600 leading-relaxed',
          centered ? 'max-w-3xl mx-auto' : 'max-w-2xl'
        )}>
          {description}
        </p>
      )}
    </div>
  );
}

interface GridLayoutProps {
  children: React.ReactNode;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function GridLayout({
  children,
  columns = { sm: 1, md: 2, lg: 3 },
  gap = 'lg',
  className
}: GridLayoutProps) {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  };
  
  const getColumnClasses = () => {
    const classes = ['grid'];
    
    if (columns.sm) classes.push(`grid-cols-${columns.sm}`);
    if (columns.md) classes.push(`md:grid-cols-${columns.md}`);
    if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`);
    if (columns.xl) classes.push(`xl:grid-cols-${columns.xl}`);
    
    return classes.join(' ');
  };
  
  return (
    <div className={cn(
      getColumnClasses(),
      gapClasses[gap],
      className
    )}>
      {children}
    </div>
  );
}

interface FeatureGridProps {
  features: {
    title: string;
    description: string;
    icon: LucideIcon;
    color?: 'blue' | 'green' | 'purple' | 'orange' | 'pink';
  }[];
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
}

export function FeatureGrid({
  features,
  columns = { sm: 1, md: 2, lg: 3 }
}: FeatureGridProps) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    pink: 'from-pink-500 to-pink-600'
  };
  
  return (
    <GridLayout columns={columns}>
      {features.map((feature, index) => {
        const color = feature.color || 'blue';
        const Icon = feature.icon;
        
        return (
          <div 
            key={index}
            className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg animate-on-scroll"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={cn(
              'w-12 h-12 rounded-xl bg-gradient-to-br text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform',
              colorClasses[color]
            )}>
              <Icon className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {feature.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        );
      })}
    </GridLayout>
  );
}

interface CTASectionProps {
  title: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  variant?: 'default' | 'gradient' | 'dark';
  centered?: boolean;
}

export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'gradient',
  centered = true
}: CTASectionProps) {
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    gradient: 'cie-gradient text-white',
    dark: 'bg-gray-900 text-white'
  };
  
  return (
    <SectionLayout variant="default" padding="lg">
      <div className={cn(
        'rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden',
        variantClasses[variant],
        centered && 'text-center'
      )}>
        {variant === 'gradient' && (
          <>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />
          </>
        )}
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className={cn(
            'text-3xl md:text-4xl lg:text-5xl font-bold mb-6',
            variant === 'gradient' ? 'text-white' : 'cie-heading'
          )}>
            {title}
          </h2>
          
          <p className={cn(
            'text-lg md:text-xl leading-relaxed mb-8',
            variant === 'gradient' ? 'text-white/90' : 'text-gray-600'
          )}>
            {description}
          </p>
          
          <div className={cn(
            'flex flex-col sm:flex-row gap-4',
            centered && 'justify-center'
          )}>
            <a 
              href={primaryAction.href}
              className={cn(
                'cie-button',
                variant === 'gradient' 
                  ? 'bg-white text-blue-600 hover:bg-gray-50' 
                  : 'cie-button-primary'
              )}
            >
              {primaryAction.text}
            </a>
            
            {secondaryAction && (
              <a 
                href={secondaryAction.href}
                className={cn(
                  'cie-button',
                  variant === 'gradient'
                    ? 'border-2 border-white text-white hover:bg-white hover:text-blue-600'
                    : 'cie-button-secondary'
                )}
              >
                {secondaryAction.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

// Specialized Section Components
export function ProgramsSection({ children }: { children: React.ReactNode }) {
  return (
    <SectionLayout variant="default" padding="xl">
      <SectionHeader
        subtitle="Student Programs"
        title="Accelerate Your Innovation Journey"
        description="Discover our comprehensive range of programs designed to transform your ideas into successful ventures."
        centered
      />
      {children}
    </SectionLayout>
  );
}

export function EventsSection({ children }: { children: React.ReactNode }) {
  return (
    <SectionLayout variant="alternate" padding="xl">
      <SectionHeader
        subtitle="Upcoming Events"
        title="Join Our Innovation Community"
        description="Participate in workshops, competitions, and networking events that connect you with industry leaders and fellow innovators."
        centered
      />
      {children}
    </SectionLayout>
  );
}

export function NewsSection({ children }: { children: React.ReactNode }) {
  return (
    <SectionLayout variant="default" padding="xl">
      <SectionHeader
        subtitle="Latest News"
        title="Stay Updated with CIE"
        description="Get the latest updates on our programs, student achievements, industry partnerships, and innovation breakthroughs."
        centered
      />
      {children}
    </SectionLayout>
  );
}