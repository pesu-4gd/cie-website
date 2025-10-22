// CIE Design System Tailwind Configuration Extension
// Add this to your tailwind.config.js file

const cieColors = {
  cie: {
    navy: {
      50: '#f5f5f9',
      100: '#ebebf2',
      200: '#d3d2e2',
      300: '#aeacc9',
      400: '#8380ac',
      500: '#3E3C6B', // Primary CIE Navy Blue
      600: '#353363',
      700: '#2d2b53',
      800: '#272546',
      900: '#24223d',
      950: '#151427',
      DEFAULT: '#3E3C6B'
    },
    orange: {
      50: '#fef5f1',
      100: '#fde8df',
      200: '#fbcdbe',
      300: '#f8aa93',
      400: '#f47b56',
      500: '#F15A29', // Primary CIE Orange
      600: '#e24116',
      700: '#bd330f',
      800: '#9c2c11',
      900: '#812815',
      950: '#461207',
      DEFAULT: '#F15A29'
    },
    teal: {
      50: '#f0f9fb',
      100: '#d9f0f5',
      200: '#b7e2ec',
      300: '#85cbdc',
      400: '#4cafc5',
      500: '#2B9EB3', // Primary CIE Teal
      600: '#268295',
      700: '#236a7a',
      800: '#245864',
      900: '#224a55',
      950: '#123039',
      DEFAULT: '#2B9EB3'
    },
    green: '#3AA76D',  // Support color
    red: '#E53935',     // Support color
    yellow: '#FFC107',  // Support color
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
      light: '#F5F5F5',
      medium: '#9E9E9E',
      dark: '#333333',
    },
    white: '#FFFFFF',
    black: '#1A1A1A',
  }
};

const cieTheme = {
  extend: {
    colors: cieColors,
    backgroundColor: cieColors,
    textColor: cieColors,
    borderColor: cieColors,
    ringColor: cieColors,
    gradientColorStops: cieColors,
    boxShadow: {
      'cie-orange': '0 10px 25px rgba(241, 90, 41, 0.3)',
      'cie-navy': '0 10px 25px rgba(62, 60, 107, 0.3)',
      'cie-teal': '0 10px 25px rgba(43, 158, 179, 0.3)',
      'cie-card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      'cie-card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    animation: {
      'cie-fade-in-up': 'cie-fade-in-up 0.6s ease-out',
      'cie-bounce': 'bounce 1s infinite',
      'cie-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    keyframes: {
      'cie-fade-in-up': {
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
      'cie-heading': ['Inter', 'Poppins', 'Open Sans', 'system-ui', 'sans-serif'],
      'cie-body': ['Inter', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [
    // Custom CIE utility plugin
    function({ addUtilities }) {
      const newUtilities = {
        '.bg-cie-gradient-innovation': {
          background: 'linear-gradient(135deg, #2B9EB3 0%, #3E3C6B 100%)',
        },
        '.bg-cie-gradient-ignite': {
          background: 'linear-gradient(135deg, #F15A29 0%, #FFC107 100%)',
        },
        '.bg-cie-gradient-spark': {
          background: 'linear-gradient(135deg, #FFC107 0%, #F15A29 100%)',
        },
        '.bg-cie-gradient-primary': {
          background: 'linear-gradient(135deg, #3E3C6B 0%, #F15A29 100%)',
        },
        '.bg-cie-gradient-subtle': {
          background: 'linear-gradient(135deg, rgba(62, 60, 107, 0.1) 0%, rgba(241, 90, 41, 0.1) 100%)',
        },
        '.text-cie-gradient': {
          background: 'linear-gradient(135deg, #3E3C6B 0%, #F15A29 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.border-cie-gradient': {
          borderImage: 'linear-gradient(135deg, #3E3C6B 0%, #F15A29 100%) 1',
        },
        '.cie-card-hover': {
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          }
        },
        '.cie-section-divider': {
          height: '4px',
          background: 'linear-gradient(90deg, #3E3C6B 0%, #F15A29 100%)',
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
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: pesTheme.extend,
  plugins: pesTheme.plugins,
}

export default pesTheme;
