import React from 'react';
import { cn } from '@/lib/utils';

// Container Component
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className, 
  size = 'xl',
  padding = true 
}) => {
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-7xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  return (
    <div 
      className={cn(
        'mx-auto w-full',
        sizes[size],
        padding && 'px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
};

// Section Component
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'muted' | 'primary' | 'secondary';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className, 
  padding = 'lg',
  background = 'default' 
}) => {
  const paddings = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  };

  const backgrounds = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    primary: 'bg-primary-50',
    secondary: 'bg-secondary-50',
  };

  return (
    <section 
      className={cn(
        'w-full',
        paddings[padding],
        backgrounds[background],
        className
      )}
    >
      {children}
    </section>
  );
};

// Grid Component
interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
}

export const Grid: React.FC<GridProps> = ({ 
  children, 
  className, 
  cols = 3,
  gap = 'md',
  responsive = true 
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: responsive ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2',
    3: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-3',
    4: responsive ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-4',
    5: responsive ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5' : 'grid-cols-5',
    6: responsive ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6' : 'grid-cols-6',
    12: responsive ? 'grid-cols-1 md:grid-cols-6 lg:grid-cols-12' : 'grid-cols-12',
  };

  const gaps = {
    none: 'gap-0',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  return (
    <div 
      className={cn(
        'grid',
        gridCols[cols],
        gaps[gap],
        className
      )}
    >
      {children}
    </div>
  );
};

// Flex Component
interface FlexProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Flex: React.FC<FlexProps> = ({ 
  children, 
  className, 
  direction = 'row',
  align = 'start',
  justify = 'start',
  wrap = false,
  gap = 'none' 
}) => {
  const directions = {
    row: 'flex-row',
    col: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse',
  };

  const alignments = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifications = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  const gaps = {
    none: '',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  return (
    <div 
      className={cn(
        'flex',
        directions[direction],
        alignments[align],
        justifications[justify],
        wrap && 'flex-wrap',
        gaps[gap],
        className
      )}
    >
      {children}
    </div>
  );
};

// Stack Component (Vertical Flex)
export const Stack: React.FC<Omit<FlexProps, 'direction'> & { spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl' }> = ({ 
  children, 
  spacing = 'md',
  ...props 
}) => (
  <Flex direction="col" gap={spacing} {...props}>
    {children}
  </Flex>
);

// Center Component
interface CenterProps {
  children: React.ReactNode;
  className?: string;
  axis?: 'both' | 'horizontal' | 'vertical';
}

export const Center: React.FC<CenterProps> = ({ children, className, axis = 'both' }) => {
  const centerClasses = {
    both: 'flex items-center justify-center',
    horizontal: 'flex justify-center',
    vertical: 'flex items-center',
  };

  return (
    <div className={cn(centerClasses[axis], className)}>
      {children}
    </div>
  );
};

// Spacer Component
interface SpacerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  axis?: 'x' | 'y' | 'both';
  className?: string;
}

export const Spacer: React.FC<SpacerProps> = ({ size = 'md', axis = 'y', className }) => {
  const sizes = {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
  };

  const axisClasses = {
    x: { width: sizes[size] },
    y: { height: sizes[size] },
    both: { width: sizes[size], height: sizes[size] },
  };

  return <div className={className} style={axisClasses[axis]} />;
};

// Divider Component
interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  label?: string;
}

export const Divider: React.FC<DividerProps> = ({ 
  orientation = 'horizontal', 
  className, 
  label 
}) => {
  if (orientation === 'vertical') {
    return (
      <div className={cn('w-px bg-border', className)} />
    );
  }

  if (label) {
    return (
      <div className={cn('relative flex items-center', className)}>
        <div className="flex-grow border-t border-gray-200" />
        <span className="px-4 text-sm text-muted-foreground bg-background">{label}</span>
        <div className="flex-grow border-t border-gray-200" />
      </div>
    );
  }

  return <hr className={cn('border-gray-200', className)} />;
};

// Hero Section Layout
interface HeroProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'gradient' | 'image';
  overlay?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ 
  children, 
  className, 
  background = 'default',
  overlay = false 
}) => {
  const backgrounds = {
    default: 'bg-background',
    gradient: 'bg-gradient-to-br from-primary-50 via-background to-secondary-50',
    image: 'bg-cover bg-center bg-no-repeat',
  };

  return (
    <section 
      className={cn(
        'relative min-h-[60vh] flex items-center justify-center',
        backgrounds[background],
        className
      )}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/20" />
      )}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

// Content Wrapper
interface ContentWrapperProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | 'full';
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ 
  children, 
  className, 
  maxWidth = '4xl' 
}) => {
  const maxWidths = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '6xl': 'max-w-6xl',
    full: 'max-w-full',
  };

  return (
    <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', maxWidths[maxWidth], className)}>
      {children}
    </div>
  );
};