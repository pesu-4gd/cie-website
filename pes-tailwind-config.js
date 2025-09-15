// PES University Tailwind Configuration Extension
// Add this to your tailwind.config.js file

const pesColors = {
  pes: {
    orange: {
      50: '#fef7ed',
      100: '#fdedd3',
      200: '#fbd9a5',
      300: '#f9c16d',
      400: '#f7a532',
      500: '#f07f1a', // Primary PES Orange
      600: '#e16510',
      700: '#ba4d0f',
      800: '#953d14',
      900: '#7a3214',
      950: '#421808',
      DEFAULT: '#f07f1a'
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#00338d', // Primary PES Blue
      900: '#1e3a8a',
      950: '#0f172a',
      DEFAULT: '#00338d'
    },
    navy: '#00338d', // Alias for primary blue
    gray: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    success: '#059669',
    warning: '#d97706',
    error: '#dc2626',
    info: '#0284c7',
  }
};

const pesTheme = {
  extend: {
    colors: pesColors,
    backgroundColor: pesColors,
    textColor: pesColors,
    borderColor: pesColors,
    ringColor: pesColors,
    gradientColorStops: pesColors,
    boxShadow: {
      'pes-orange': '0 10px 25px rgba(240, 127, 26, 0.3)',
      'pes-blue': '0 10px 25px rgba(0, 51, 141, 0.3)',
      'pes-card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      'pes-card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    animation: {
      'pes-fade-in-up': 'pes-fade-in-up 0.6s ease-out',
      'pes-bounce': 'bounce 1s infinite',
      'pes-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    keyframes: {
      'pes-fade-in-up': {
        '0%': {
          opacity: '0',
          transform: 'translateY(20px)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)'
        }
      }
    },
    fontFamily: {
      'pes-heading': ['Inter', 'system-ui', 'sans-serif'],
      'pes-body': ['Inter', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [
    // Custom PES utility plugin
    function({ addUtilities }) {
      const newUtilities = {
        '.bg-pes-gradient': {
          background: 'linear-gradient(135deg, #00338d 0%, #f07f1a 100%)',
        },
        '.bg-pes-gradient-reverse': {
          background: 'linear-gradient(135deg, #f07f1a 0%, #00338d 100%)',
        },
        '.bg-pes-gradient-subtle': {
          background: 'linear-gradient(135deg, rgba(0, 51, 141, 0.1) 0%, rgba(240, 127, 26, 0.1) 100%)',
        },
        '.text-pes-gradient': {
          background: 'linear-gradient(135deg, #00338d 0%, #f07f1a 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.border-pes-gradient': {
          borderImage: 'linear-gradient(135deg, #00338d 0%, #f07f1a 100%) 1',
        },
        '.pes-card-hover': {
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          }
        },
        '.pes-section-divider': {
          height: '4px',
          background: 'linear-gradient(90deg, #00338d 0%, #f07f1a 100%)',
          borderRadius: '2px',
          margin: '2rem auto',
          maxWidth: '200px',
        }
      }
      
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ]
};

// Usage in your tailwind.config.js:
/*
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: pesTheme.extend,
  plugins: pesTheme.plugins,
}
*/

export default pesTheme;
