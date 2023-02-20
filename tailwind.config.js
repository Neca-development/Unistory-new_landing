/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Manrope', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
    fontSize:{
      'h1': ['4.75rem', {
        lineHeight: '5.375rem',
        letterSpacing: '0.02em',
        fontWeight: '800',
      }],
      'h2': ['2.875rem', {
        lineHeight: '3.25rem',
        letterSpacing: '0.02em',
        fontWeight: '700',
      }]
    },
    colors: {
      'light-bg': '#F5F5F5',
      'dark-bg': '#141414',

      'light-text-primary': '#0F1A20',
      'dark-text-primary': '#FFFFFF',

      'light-text-secondary': '#0F1A2080',
      'dark-text-secondary': '#FFFFFF80',
      
      'icon-accent': '#0F1A20',
      'icon-on-primary': '#FFFFFFE5',

      'primary-s': "var(--color-text)",
      // 'primary-text': "#404040",
      // 'primary-text--disable': "#7A798A",
      // 'secondary-text': "#404040",
      // 'secondary-text--disable': "#7A798A",

      'primary-accent': "",
      'secondary-accent': "",    

      'success': "#14AE24",
      'error': "#D44C4C",
      'loading': "#64B2DD",
      "warning": "#F2B235",
      
    },
  },
  plugins: [],
};
