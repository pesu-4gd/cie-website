// Tailwind CSS v4 configuration
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors using CSS variables
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        
        // CIE Brand colors - Following CIE Design System
        primary: {
          50: '#f5f5f9',
          100: '#ebebf2',
          200: '#d3d2e2',
          300: '#aeacc9',
          400: '#8380ac',
          500: '#3E3C6B', // CIE Navy Blue - Main brand color
          600: '#353363',
          700: '#2d2b53',
          800: '#272546',
          900: '#24223d',
          950: '#151427',
          DEFAULT: '#3E3C6B',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          50: '#fef5f1',
          100: '#fde8df',
          200: '#fbcdbe',
          300: '#f8aa93',
          400: '#f47b56',
          500: '#F15A29', // CIE Orange - Accent brand color
          600: '#e24116',
          700: '#bd330f',
          800: '#9c2c11',
          900: '#812815',
          950: '#461207',
          DEFAULT: '#F15A29',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        // CIE specific colors following Design System
        cie: {
          'navy': '#3E3C6B',        // Primary brand - Headers, navbars, primary text
          'orange': '#F15A29',      // Accent - Buttons, highlights, CTAs
          'teal': '#2B9EB3',        // Secondary - Secondary buttons, icons, borders
          'green': '#3AA76D',       // Support - Success indicators
          'red': '#E53935',         // Support - Errors, urgent CTAs
          'yellow': '#FFC107',      // Support - Awards, highlights
          'white': '#FFFFFF',       // Neutral - Backgrounds
          'gray-light': '#F5F5F5',  // Neutral - Section separators
          'gray-medium': '#9E9E9E', // Neutral - Secondary text
          'gray-dark': '#333333',   // Neutral - Body text
          'black': '#1A1A1A',       // Neutral - Headlines, high contrast
        },
        // Academic colors for different purposes
        academic: {
          'excellence': '#059669',  // Green for achievements
          'innovation': '#7c3aed',  // Purple for innovation
          'research': '#0891b2',    // Teal for research
          'community': '#dc2626',   // Red for community
        },
        // Semantic colors
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.375rem',
        'md': '0.5rem',
        'lg': 'var(--radius)',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },
      boxShadow: {
        'cie-sm': '0 1px 2px 0 rgba(62, 60, 107, 0.05)',
        'cie': '0 4px 6px -1px rgba(62, 60, 107, 0.1), 0 2px 4px -1px rgba(62, 60, 107, 0.06)',
        'cie-md': '0 10px 15px -3px rgba(62, 60, 107, 0.1), 0 4px 6px -2px rgba(62, 60, 107, 0.05)',
        'cie-lg': '0 20px 25px -5px rgba(62, 60, 107, 0.1), 0 10px 10px -5px rgba(62, 60, 107, 0.04)',
        'cie-xl': '0 25px 50px -12px rgba(62, 60, 107, 0.25)',
        'cie-glow': '0 0 20px rgba(62, 60, 107, 0.3)',
        'orange-glow': '0 0 20px rgba(241, 90, 41, 0.3)',
        'teal-glow': '0 0 20px rgba(43, 158, 179, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}