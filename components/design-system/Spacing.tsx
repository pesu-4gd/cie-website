import React from 'react';
import { cn } from '@/lib/utils';

// Spacing Scale Display Component
export const SpacingScale: React.FC<{ className?: string }> = ({ className }) => {
  const spacingValues = [
    { name: 'xs', value: '0.5rem', class: 'w-2 h-2' },
    { name: 'sm', value: '1rem', class: 'w-4 h-4' },
    { name: 'md', value: '1.5rem', class: 'w-6 h-6' },
    { name: 'lg', value: '2rem', class: 'w-8 h-8' },
    { name: 'xl', value: '3rem', class: 'w-12 h-12' },
    { name: '2xl', value: '4rem', class: 'w-16 h-16' },
    { name: '3xl', value: '6rem', class: 'w-24 h-24' },
  ];

  return (
    <div className={cn('space-y-4', className)}>
      <h3 className="text-lg font-semibold text-foreground">Spacing Scale</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spacingValues.map((spacing) => (
          <div key={spacing.name} className="flex items-center space-x-4">
            <div className={cn('bg-primary rounded', spacing.class)} />
            <div>
              <div className="font-medium text-sm">{spacing.name}</div>
              <div className="text-xs text-muted-foreground">{spacing.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Padding Utilities
interface PaddingProps {
  children: React.ReactNode;
  className?: string;
  size?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  axis?: 'all' | 'x' | 'y' | 't' | 'r' | 'b' | 'l';
}

export const Padding: React.FC<PaddingProps> = ({ 
  children, 
  className, 
  size = 'md', 
  axis = 'all' 
}) => {
  const paddingClasses = {
    none: {
      all: 'p-0',
      x: 'px-0',
      y: 'py-0',
      t: 'pt-0',
      r: 'pr-0',
      b: 'pb-0',
      l: 'pl-0',
    },
    xs: {
      all: 'p-2',
      x: 'px-2',
      y: 'py-2',
      t: 'pt-2',
      r: 'pr-2',
      b: 'pb-2',
      l: 'pl-2',
    },
    sm: {
      all: 'p-4',
      x: 'px-4',
      y: 'py-4',
      t: 'pt-4',
      r: 'pr-4',
      b: 'pb-4',
      l: 'pl-4',
    },
    md: {
      all: 'p-6',
      x: 'px-6',
      y: 'py-6',
      t: 'pt-6',
      r: 'pr-6',
      b: 'pb-6',
      l: 'pl-6',
    },
    lg: {
      all: 'p-8',
      x: 'px-8',
      y: 'py-8',
      t: 'pt-8',
      r: 'pr-8',
      b: 'pb-8',
      l: 'pl-8',
    },
    xl: {
      all: 'p-12',
      x: 'px-12',
      y: 'py-12',
      t: 'pt-12',
      r: 'pr-12',
      b: 'pb-12',
      l: 'pl-12',
    },
    '2xl': {
      all: 'p-16',
      x: 'px-16',
      y: 'py-16',
      t: 'pt-16',
      r: 'pr-16',
      b: 'pb-16',
      l: 'pl-16',
    },
    '3xl': {
      all: 'p-24',
      x: 'px-24',
      y: 'py-24',
      t: 'pt-24',
      r: 'pr-24',
      b: 'pb-24',
      l: 'pl-24',
    },
  };

  return (
    <div className={cn(paddingClasses[size][axis], className)}>
      {children}
    </div>
  );
};

// Margin Utilities
interface MarginProps {
  children: React.ReactNode;
  className?: string;
  size?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'auto';
  axis?: 'all' | 'x' | 'y' | 't' | 'r' | 'b' | 'l';
}

export const Margin: React.FC<MarginProps> = ({ 
  children, 
  className, 
  size = 'md', 
  axis = 'all' 
}) => {
  const marginClasses = {
    none: {
      all: 'm-0',
      x: 'mx-0',
      y: 'my-0',
      t: 'mt-0',
      r: 'mr-0',
      b: 'mb-0',
      l: 'ml-0',
    },
    xs: {
      all: 'm-2',
      x: 'mx-2',
      y: 'my-2',
      t: 'mt-2',
      r: 'mr-2',
      b: 'mb-2',
      l: 'ml-2',
    },
    sm: {
      all: 'm-4',
      x: 'mx-4',
      y: 'my-4',
      t: 'mt-4',
      r: 'mr-4',
      b: 'mb-4',
      l: 'ml-4',
    },
    md: {
      all: 'm-6',
      x: 'mx-6',
      y: 'my-6',
      t: 'mt-6',
      r: 'mr-6',
      b: 'mb-6',
      l: 'ml-6',
    },
    lg: {
      all: 'm-8',
      x: 'mx-8',
      y: 'my-8',
      t: 'mt-8',
      r: 'mr-8',
      b: 'mb-8',
      l: 'ml-8',
    },
    xl: {
      all: 'm-12',
      x: 'mx-12',
      y: 'my-12',
      t: 'mt-12',
      r: 'mr-12',
      b: 'mb-12',
      l: 'ml-12',
    },
    '2xl': {
      all: 'm-16',
      x: 'mx-16',
      y: 'my-16',
      t: 'mt-16',
      r: 'mr-16',
      b: 'mb-16',
      l: 'ml-16',
    },
    '3xl': {
      all: 'm-24',
      x: 'mx-24',
      y: 'my-24',
      t: 'mt-24',
      r: 'mr-24',
      b: 'mb-24',
      l: 'ml-24',
    },
    auto: {
      all: 'm-auto',
      x: 'mx-auto',
      y: 'my-auto',
      t: 'mt-auto',
      r: 'mr-auto',
      b: 'mb-auto',
      l: 'ml-auto',
    },
  };

  return (
    <div className={cn(marginClasses[size][axis], className)}>
      {children}
    </div>
  );
};

// Gap Utilities for Flex/Grid
interface GapProps {
  children: React.ReactNode;
  className?: string;
  size?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  axis?: 'all' | 'x' | 'y';
}

export const Gap: React.FC<GapProps> = ({ 
  children, 
  className, 
  size = 'md', 
  axis = 'all' 
}) => {
  const gapClasses = {
    none: {
      all: 'gap-0',
      x: 'gap-x-0',
      y: 'gap-y-0',
    },
    xs: {
      all: 'gap-2',
      x: 'gap-x-2',
      y: 'gap-y-2',
    },
    sm: {
      all: 'gap-4',
      x: 'gap-x-4',
      y: 'gap-y-4',
    },
    md: {
      all: 'gap-6',
      x: 'gap-x-6',
      y: 'gap-y-6',
    },
    lg: {
      all: 'gap-8',
      x: 'gap-x-8',
      y: 'gap-y-8',
    },
    xl: {
      all: 'gap-12',
      x: 'gap-x-12',
      y: 'gap-y-12',
    },
    '2xl': {
      all: 'gap-16',
      x: 'gap-x-16',
      y: 'gap-y-16',
    },
  };

  return (
    <div className={cn('flex', gapClasses[size][axis], className)}>
      {children}
    </div>
  );
};

// Visual Spacing Guide Component
export const SpacingGuide: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('space-y-8', className)}>
      <div>
        <h3 className="text-lg font-semibold mb-4">Padding Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-muted/30 border border-gray-200 rounded-lg">
            <Padding size="sm">
              <div className="bg-primary/20 rounded text-center py-2">Small Padding</div>
            </Padding>
          </div>
          <div className="bg-muted/30 border border-gray-200 rounded-lg">
            <Padding size="md">
              <div className="bg-primary/20 rounded text-center py-2">Medium Padding</div>
            </Padding>
          </div>
          <div className="bg-muted/30 border border-gray-200 rounded-lg">
            <Padding size="lg">
              <div className="bg-primary/20 rounded text-center py-2">Large Padding</div>
            </Padding>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Margin Examples</h3>
        <div className="bg-muted/30 border border-gray-200 rounded-lg p-4">
          <Margin size="sm">
            <div className="bg-secondary/20 rounded text-center py-2">Small Margin</div>
          </Margin>
          <Margin size="md">
            <div className="bg-secondary/20 rounded text-center py-2">Medium Margin</div>
          </Margin>
          <Margin size="lg">
            <div className="bg-secondary/20 rounded text-center py-2">Large Margin</div>
          </Margin>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Gap Examples</h3>
        <div className="space-y-4">
          <Gap size="sm" className="bg-muted/30 border border-gray-200 rounded-lg p-4">
            <div className="bg-cie-orange/20 rounded text-center py-2 flex-1">Item 1</div>
            <div className="bg-cie-orange/20 rounded text-center py-2 flex-1">Item 2</div>
            <div className="bg-cie-orange/20 rounded text-center py-2 flex-1">Item 3</div>
          </Gap>
          <Gap size="lg" className="bg-muted/30 border border-gray-200 rounded-lg p-4">
            <div className="bg-cie-gold/20 rounded text-center py-2 flex-1">Item 1</div>
            <div className="bg-cie-gold/20 rounded text-center py-2 flex-1">Item 2</div>
            <div className="bg-cie-gold/20 rounded text-center py-2 flex-1">Item 3</div>
          </Gap>
        </div>
      </div>
    </div>
  );
};

// Responsive Spacing Component
interface ResponsiveSpacingProps {
  children: React.ReactNode;
  className?: string;
  mobile?: 'xs' | 'sm' | 'md' | 'lg';
  tablet?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  desktop?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  type?: 'padding' | 'margin';
  axis?: 'all' | 'x' | 'y';
}

export const ResponsiveSpacing: React.FC<ResponsiveSpacingProps> = ({
  children,
  className,
  mobile = 'sm',
  tablet = 'md',
  desktop = 'lg',
  type = 'padding',
  axis = 'all'
}) => {
  const getSpacingClass = (size: string, breakpoint?: string) => {
    const prefix = breakpoint ? `${breakpoint}:` : '';
    const spacingType = type === 'padding' ? 'p' : 'm';
    
    const axisMap = {
      all: '',
      x: 'x',
      y: 'y'
    };
    
    const sizeMap = {
      xs: '2',
      sm: '4',
      md: '6',
      lg: '8',
      xl: '12',
      '2xl': '16'
    };
    
    return `${prefix}${spacingType}${axisMap[axis]}-${sizeMap[size as keyof typeof sizeMap]}`;
  };

  const spacingClasses = [
    getSpacingClass(mobile),
    getSpacingClass(tablet, 'md'),
    getSpacingClass(desktop, 'lg')
  ].join(' ');

  return (
    <div className={cn(spacingClasses, className)}>
      {children}
    </div>
  );
};