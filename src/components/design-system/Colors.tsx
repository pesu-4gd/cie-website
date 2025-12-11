import React from 'react';
import { cn } from '@/lib/utils';

// Color Palette Component
interface ColorSwatchProps {
  color: string;
  name: string;
  value: string;
  className?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, name, value, className }) => (
  <div className={cn('flex flex-col items-center space-y-2', className)}>
    <div 
      className={`w-16 h-16 rounded-lg border-2 border-gray-200 shadow-sm ${color}`}
      title={`${name}: ${value}`}
    />
    <div className="text-center">
      <p className="text-sm font-medium text-foreground">{name}</p>
      <p className="text-xs text-muted-foreground font-mono">{value}</p>
    </div>
  </div>
);

// Primary Colors
export const PrimaryColors: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-foreground">Primary Colors</h3>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <ColorSwatch color="bg-primary-100" name="Primary 100" value="#dbeafe" />
      <ColorSwatch color="bg-primary-300" name="Primary 300" value="#93c5fd" />
      <ColorSwatch color="bg-primary-500" name="Primary 500" value="#2563eb" />
      <ColorSwatch color="bg-primary-700" name="Primary 700" value="#1e40af" />
      <ColorSwatch color="bg-primary-900" name="Primary 900" value="#172554" />
    </div>
  </div>
);

// CIE Brand Colors
export const CIEColors: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-foreground">CIE Brand Colors</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <ColorSwatch color="bg-cie-orange" name="CIE Orange" value="#ff6b35" />
      <ColorSwatch color="bg-cie-orange-light" name="Orange Light" value="#ff8c69" />
      <ColorSwatch color="bg-cie-orange-dark" name="Orange Dark" value="#e55a2b" />
      <ColorSwatch color="bg-cie-gold" name="CIE Gold" value="#ffd700" />
      <ColorSwatch color="bg-cie-gold-light" name="Gold Light" value="#ffed4e" />
      <ColorSwatch color="bg-cie-gold-dark" name="Gold Dark" value="#ccac00" />
    </div>
  </div>
);

// Semantic Colors
export const SemanticColors: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-foreground">Semantic Colors</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <ColorSwatch color="bg-success-500" name="Success" value="#22c55e" />
      <ColorSwatch color="bg-warning-500" name="Warning" value="#f59e0b" />
      <ColorSwatch color="bg-error-500" name="Error" value="#ef4444" />
    </div>
  </div>
);

// Neutral Colors
export const NeutralColors: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-foreground">Neutral Colors</h3>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <ColorSwatch color="bg-secondary-100" name="Gray 100" value="#f1f5f9" />
      <ColorSwatch color="bg-secondary-300" name="Gray 300" value="#cbd5e1" />
      <ColorSwatch color="bg-secondary-500" name="Gray 500" value="#64748b" />
      <ColorSwatch color="bg-secondary-700" name="Gray 700" value="#334155" />
      <ColorSwatch color="bg-secondary-900" name="Gray 900" value="#0f172a" />
    </div>
  </div>
);

// Complete Color Palette
export const ColorPalette: React.FC = () => (
  <div className="space-y-8 p-6">
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">CIE Design System Colors</h2>
      <p className="text-muted-foreground">Complete color palette for the CIE website design system.</p>
    </div>
    
    <PrimaryColors />
    <CIEColors />
    <SemanticColors />
    <NeutralColors />
  </div>
);

// Color Utility Classes
export const colorClasses = {
  // Primary
  primary: {
    bg: 'bg-primary-500',
    text: 'text-primary-500',
    border: 'border-primary-500',
    hover: 'hover:bg-primary-600',
    focus: 'focus:ring-primary-500',
  },
  // CIE Brand
  cie: {
    orange: {
      bg: 'bg-cie-orange',
      text: 'text-cie-orange',
      border: 'border-cie-orange',
      hover: 'hover:bg-cie-orange-dark',
    },
    gold: {
      bg: 'bg-cie-gold',
      text: 'text-cie-gold',
      border: 'border-cie-gold',
      hover: 'hover:bg-cie-gold-dark',
    },
  },
  // Semantic
  success: {
    bg: 'bg-success-500',
    text: 'text-success-500',
    border: 'border-success-500',
    hover: 'hover:bg-success-600',
  },
  warning: {
    bg: 'bg-warning-500',
    text: 'text-warning-500',
    border: 'border-warning-500',
    hover: 'hover:bg-warning-600',
  },
  error: {
    bg: 'bg-error-500',
    text: 'text-error-500',
    border: 'border-error-500',
    hover: 'hover:bg-error-600',
  },
};