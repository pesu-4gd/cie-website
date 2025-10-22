/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cie: {
          navy: "#3E3C6B",
          orange: "#F15A29",
          teal: "#2B9EB3",
          green: "#3AA76D",
          red: "#E53935",
          yellow: "#FFC107",
          white: "#FFFFFF",
          grayLight: "#F5F5F5",
          grayMedium: "#9E9E9E",
          grayDark: "#333333",
          black: "#1A1A1A",
        },
      },
      backgroundImage: {
        "gradient-innovation": "linear-gradient(135deg, #2B9EB3 0%, #3E3C6B 100%)",
        "gradient-ignite": "linear-gradient(135deg, #F15A29 0%, #FFC107 100%)",
        "gradient-spark": "linear-gradient(135deg, #FFC107 0%, #F15A29 100%)",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
