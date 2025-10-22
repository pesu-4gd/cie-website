import React from 'react';
import { cn } from '@/lib/utils';

// Typography Component Props
interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// Heading Components
export const H1: React.FC<TypographyProps> = ({ children, className }) => (
  <h1 className={cn(
    'scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl font-heading text-foreground',
    className
  )}>
    {children}
  </h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className }) => (
  <h2 className={cn(
    'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 font-heading text-foreground',
    className
  )}>
    {children}
  </h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className }) => (
  <h3 className={cn(
    'scroll-m-20 text-2xl font-semibold tracking-tight font-heading text-foreground',
    className
  )}>
    {children}
  </h3>
);

export const H4: React.FC<TypographyProps> = ({ children, className }) => (
  <h4 className={cn(
    'scroll-m-20 text-xl font-semibold tracking-tight font-heading text-foreground',
    className
  )}>
    {children}
  </h4>
);

export const H5: React.FC<TypographyProps> = ({ children, className }) => (
  <h5 className={cn(
    'scroll-m-20 text-lg font-semibold tracking-tight font-heading text-foreground',
    className
  )}>
    {children}
  </h5>
);

export const H6: React.FC<TypographyProps> = ({ children, className }) => (
  <h6 className={cn(
    'scroll-m-20 text-base font-semibold tracking-tight font-heading text-foreground',
    className
  )}>
    {children}
  </h6>
);

// Text Components
export const P: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn(
    'leading-7 text-foreground [&:not(:first-child)]:mt-6',
    className
  )}>
    {children}
  </p>
);

export const Lead: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn(
    'text-xl text-muted-foreground leading-relaxed',
    className
  )}>
    {children}
  </p>
);

export const Large: React.FC<TypographyProps> = ({ children, className }) => (
  <div className={cn(
    'text-lg font-semibold text-foreground',
    className
  )}>
    {children}
  </div>
);

export const Small: React.FC<TypographyProps> = ({ children, className }) => (
  <small className={cn(
    'text-sm font-medium leading-none text-muted-foreground',
    className
  )}>
    {children}
  </small>
);

export const Muted: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn(
    'text-sm text-muted-foreground',
    className
  )}>
    {children}
  </p>
);

// Code Components
export const Code: React.FC<TypographyProps> = ({ children, className }) => (
  <code className={cn(
    'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
    className
  )}>
    {children}
  </code>
);

// List Components
interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export const List: React.FC<ListProps> = ({ children, className }) => (
  <ul className={cn(
    'my-6 ml-6 list-disc [&>li]:mt-2',
    className
  )}>
    {children}
  </ul>
);

// Blockquote Component
export const Blockquote: React.FC<TypographyProps> = ({ children, className }) => (
  <blockquote className={cn(
    'mt-6 border-l-2 border-primary-500 pl-6 italic text-muted-foreground',
    className
  )}>
    {children}
  </blockquote>
);

// CIE Specific Typography
export const CIETitle: React.FC<TypographyProps> = ({ children, className }) => (
  <h1 className={cn(
    'text-4xl md:text-5xl lg:text-6xl font-bold font-heading bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent',
    className
  )}>
    {children}
  </h1>
);

export const CIESubtitle: React.FC<TypographyProps> = ({ children, className }) => (
  <h2 className={cn(
    'text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground font-heading',
    className
  )}>
    {children}
  </h2>
);

export const CIEDescription: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn(
    'text-lg leading-relaxed text-muted-foreground max-w-3xl',
    className
  )}>
    {children}
  </p>
);