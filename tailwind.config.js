/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    colors: {
      'light-bg': '#F5F5F5',
      'dark-bg': '#141414',

      'light-bg-accent': '#FFFFFF',
      'dark-bg-accent': '#1F1F1F',

      'light-text-primary': '#0F1A20',
      'dark-text-primary': '#FFFFFF',

      'light-text-secondary': '#0F1A2080',
      'dark-text-secondary': '#FFFFFF80',

      'icon-accent': '#0F1A20',
      'icon-on-primary': '#FFFFFFE5',

      'primary-s': 'var(--color-text)',
      // 'primary-text': "#404040",
      // 'primary-text--disable': "#7A798A",
      // 'secondary-text': "#404040",
      // 'secondary-text--disable': "#7A798A",

      'bg-s': 'var(--color-bg)',

      'bg-hover': '#0F1A200D',

      'primary-accent': '',
      'secondary-accent': '',

      success: '#14AE24',
      error: '#D44C4C',
      loading: '#64B2DD',
      warning: '#F2B235',

      'light-surface': '#fff',
      'dark-surface': '#222222',

      'pale-text': '#ffffffe5',
      'black-text': '#0F1A20',
    },
    extend: {
      fontSize: {
        h1: [
          '4.75rem',
          {
            lineHeight: '5.375rem',
            letterSpacing: '0.02em',
            fontWeight: '800',
          },
        ],
        h2: [
          '2.875rem',
          {
            lineHeight: '3.25rem',
            letterSpacing: '0.02em',
            fontWeight: '700',
          },
        ],
      },
      backgroundImage: {
        noise: "url('/assets/images/noise.png')",
        card_bg_stat_service: "url('/assets/images/cases/stat-service.jpg')",
        card_bg_cloud_cash: "url('/assets/images/cases/cloud-cash.jpg')",
        card_bg_game_platform: "url('/assets/images/cases/game-platform.jpg')",
        card_bg_gas_monsters: "url('/assets/images/cases/gas-monsters.jpg')",
        card_bg_personal: "url('/assets/images/cases/personal.jpg')",
        card_bg_rzhd: "url('/assets/images/cases/rzhd.jpg')",
        card_bg_safety_platform:
          "url('/assets/images/cases/safety-platform.jpg')",
        card_bg_sberbank: "url('/assets/images/cases/sberbank.jpg')",
      },
      boxShadow: {
        '8dp':
          '0px 0px 2px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.08)',
        '16dp':
          '0px 0px 8px rgba(0, 0, 0, 0.12), 0px 16px 16px rgba(0, 0, 0, 0.1)',
        navbar:
          '0px 0px 1px rgba(0, 0, 0, 0.05), 0px 4px 20px rgba(15, 26, 32, 0.08)',
      },
    },
  },
  safelist: [
    'bg-card_bg_stat_service',
    'bg-card_bg_cloud_cash',
    'bg-card_bg_game_platform',
    'bg-card_bg_gas_monsters',
    'bg-card_bg_personal',
    'bg-card_bg_rzhd',
    'bg-card_bg_safety_platform',
    'bg-card_bg_sberbank',
  ],
  plugins: [],
}
