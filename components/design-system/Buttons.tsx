import React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

// Button Variants using CVA
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary-500 text-primary-foreground hover:bg-primary-600 shadow-cie',
        destructive: 'bg-error-500 text-white hover:bg-error-600 shadow-cie',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 shadow-cie-sm',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary-500 underline-offset-4 hover:underline',
        // CIE specific variants
        cie: 'bg-gradient-to-r from-primary-500 to-primary-700 text-white hover:from-primary-600 hover:to-primary-800 shadow-cie-glow',
        'cie-orange': 'bg-cie-orange text-white hover:bg-cie-orange-dark shadow-cie',
        'cie-gold': 'bg-cie-gold text-gray-900 hover:bg-cie-gold-dark shadow-cie',
        success: 'bg-success-500 text-white hover:bg-success-600 shadow-cie',
        warning: 'bg-warning-500 text-white hover:bg-warning-600 shadow-cie',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        xl: 'h-12 rounded-lg px-10 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

// Specialized CIE Buttons
export const CIEButton: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <Button
    variant="cie"
    className={cn('animate-fade-in', className)}
    {...props}
  >
    {children}
  </Button>
);

export const CIEPrimaryButton: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <Button
    variant="default"
    size="lg"
    className={cn('font-semibold tracking-wide', className)}
    {...props}
  >
    {children}
  </Button>
);

export const CIESecondaryButton: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <Button
    variant="outline"
    size="lg"
    className={cn('font-semibold tracking-wide border-2', className)}
    {...props}
  >
    {children}
  </Button>
);

export const CIEGhostButton: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <Button
    variant="ghost"
    className={cn('font-medium', className)}
    {...props}
  >
    {children}
  </Button>
);

// Action Buttons
export const ActionButton: React.FC<ButtonProps & { action: 'apply' | 'register' | 'learn-more' | 'contact' }> = ({ 
  children, 
  action, 
  className, 
  ...props 
}) => {
  const actionStyles = {
    apply: 'bg-success-500 hover:bg-success-600 text-white',
    register: 'bg-primary-500 hover:bg-primary-600 text-white',
    'learn-more': 'bg-secondary-100 hover:bg-secondary-200 text-secondary-900 border border-secondary-300',
    contact: 'bg-cie-orange hover:bg-cie-orange-dark text-white',
  };

  return (
    <Button
      className={cn(
        'font-semibold tracking-wide shadow-cie transition-all duration-200',
        actionStyles[action],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

// Icon Button
interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
  label?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ 
  icon, 
  label, 
  className, 
  size = 'icon',
  ...props 
}) => (
  <Button
    size={size}
    className={cn('relative group', className)}
    title={label}
    {...props}
  >
    {icon}
    {label && (
      <span className="sr-only">{label}</span>
    )}
  </Button>
);

// Loading Button
interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
  loadingText?: string;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({ 
  children, 
  loading = false, 
  loadingText = 'Loading...', 
  disabled,
  className,
  ...props 
}) => (
  <Button
    disabled={disabled || loading}
    className={cn('relative', className)}
    {...props}
  >
    {loading && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      </div>
    )}
    <span className={loading ? 'opacity-0' : 'opacity-100'}>
      {loading ? loadingText : children}
    </span>
  </Button>
);

// Button Group
interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ 
  children, 
  className, 
  orientation = 'horizontal' 
}) => (
  <div 
    className={cn(
      'inline-flex',
      orientation === 'horizontal' ? 'flex-row' : 'flex-col',
      '[&>button]:rounded-none [&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md',
      orientation === 'vertical' && '[&>button:first-child]:rounded-t-md [&>button:first-child]:rounded-l-none [&>button:last-child]:rounded-b-md [&>button:last-child]:rounded-r-none',
      className
    )}
  >
    {children}
  </div>
);

export { Button, buttonVariants };