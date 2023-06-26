/** @type {import('tailwindcss').Config} */

const LOGO_ENTER_ANIMATION_DURATION = 3.5;
const LOGO_ANIMATION_CURVE = "ease-in-out";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      "light-bg": "#F5F5F5",
      "dark-bg": "#141414",

      "light-bg-accent": "#FFFFFF",
      "dark-bg-accent": "#1F1F1F",

      "light-text-primary": "#0F1A20",
      "dark-text-primary": "#FFFFFF",

      "light-text-secondary": "#0F1A2080",
      "dark-text-secondary": "#FFFFFF80",

      "icon-accent": "#0F1A20",
      "icon-on-primary": "#FFFFFFE5",

      transparent: "transparent",

      "primary-s": "var(--color-text)",
      // 'primary-text': "#404040",
      // 'primary-text--disable': "#7A798A",
      // 'secondary-text': "#404040",
      // 'secondary-text--disable': "#7A798A",

      "bg-s": "var(--color-bg)",

      "bg-hover": "#0F1A200D",

      "primary-accent": "",
      "secondary-accent": "",
      "bg-gradient": "#000000",

      success: "#14AE24",
      error: "#D44C4C",
      loading: "#64B2DD",
      warning: "#F2B235",

      "light-surface": "#fff",
      "dark-surface": "#222222",

      "pale-text": "#ffffffe5",
      "black-text": "#0F1A20",

      winter: "#4FCCD5",
      summer: "#EC5F3B",
    },
    extend: {
      screens: {
        "t-xs": { max: "640px" },
        "m-2xl": { max: "520px" },
        "m-xl": { max: "460px" },
        "m-l": { max: "420px" },
        "m-m": { max: "360px" },
        "m-s": { max: "320px" },
        "m-xs": { max: "260px" },
      },
      fontSize: {
        h1: [
          "6.0rem",
          {
            lineHeight: "6.575rem",
            letterSpacing: "0.02em",
            fontWeight: "800",
          },
        ],
        "large-h1": [
          "5.75rem",
          {
            lineHeight: "6.5rem",
          },
        ],
        "mob-h1": [
          "2rem",
          {
            lineHeight: "2.55rem",
            letterSpacing: "0.02em",
            fontWeight: "700",
          },
        ],
        h2: [
          "2.875rem",
          {
            lineHeight: "3.25rem",
            letterSpacing: "0.02em",
            fontWeight: "700",
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
        card_bg_safety_platform: "url('/assets/images/cases/safety-platform.jpg')",
        card_bg_sberbank: "url('/assets/images/cases/sberbank.jpg')",
      },
      boxShadow: {
        "8dp": "0px 0px 2px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.08)",
        "16dp": "0px 0px 8px rgba(0, 0, 0, 0.12), 0px 16px 16px rgba(0, 0, 0, 0.1)",
        navbar: "0px 0px 1px rgba(0, 0, 0, 0.05), 0px 4px 20px rgba(15, 26, 32, 0.08)",
      },
      keyframes: {
        "move-in": {
          "0%": { transform: "translateY(-110%)" },
          "100%": { transform: "translateY(0)" },
        },
        "move-out": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-110%)" },
        },
        "zoom-out": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
        "zoom-in": {
          "0%": { transform: "scale(1.4)" },
          "100%": { transform: "scale(1.2)" },
        },
        "logo-enter-lg": {
          "0%": {
            top: "50vh",
            left: "50vw",
            transform: "translate(-20%, -50%)",
          },
          "10%": {
            top: "50vh",
            left: "50vw",
            transform: "translate(-20%, -50%)",
          },
          "65%": {
            top: "50vh",
            left: "50vw",
            transform: "translate(-50%, -50%)",
          },
          "100%": {
            top: "2rem",
            left: "calc((100vw - 70rem) / 2)",
            transform: "translate(0, 0)",
          },
        },
        "logo-enter-xl": {
          "0%": {
            top: "50vh",
            left: "50vw",
            transform: "translate(-20%, -50%)",
          },
          "10%": {
            top: "50vh",
            left: "50vw",
            transform: "translate(-20%, -50%)",
          },
          "65%": {
            top: "50vh",
            left: "50vw",
            transform: "translate(-50%, -50%)",
          },
          "100%": {
            top: "2rem",
            left: "calc((100vw - 80rem) / 2)",
            transform: "translate(0, 0)",
          },
        },
        "logo-enter-mobile": {
          "0%": {
            top: "50vh",
            left: "50vw",
            transform: "translate(-15%, -50%)",
          },
          "10%": {
            top: "50vh",
            left: "50vw",
            transform: "translate(-15%, -50%)",
          },
          "65%": {
            top: "50vh",
            left: "50vw",
            transform: "translate(-50%, -50%)",
          },
          "100%": {
            top: "2.3rem",
            left: "1rem",
            transform: "translate(0, 0)",
          },
        },
        "logo-overflow-lg": {
          "0%": {
            width: "25%",
          },
          "20%": {
            width: "25%",
          },
          "60%": {
            width: "100%",
          },
          "100%": {
            width: "100%",
          },
        },
        "logo-overflow-mobile": {
          "0%": {
            width: "25%",
          },
          "20%": {
            width: "25%",
          },
          "65%": {
            width: "100%",
          },
          "100%": {
            width: "100%",
          },
        },
        "main-logo-width-lg": {
          "0%": {
            width: "30rem",
          },
          "57%": {
            width: "30rem",
          },
          "89%": {
            width: "8rem",
          },
        },
        "main-logo-width-mobile": {
          "0%": {
            width: "20rem",
          },
          "65%": {
            width: "20rem",
          },
          "100%": {
            width: "8rem",
          },
        },
        "header-height": {
          "0%": {
            opacity: "1",
          },
          "65%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "header-links-opacity": {
          "0%": {
            opacity: 0,
          },
          "80%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "hero-icons-fade-in": {
          "0%": {
            opacity: 0,
          },
          "85%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "link-hover-on": {
          "0%": {
            width: 0,
            left: 0,
          },
          "100%": {
            width: "100%",
            left: 0,
          },
        },
        "link-hover-off": {
          "0%": {
            width: "100%",
            right: 0,
          },
          "100%": {
            width: 0,
            right: 0,
          },
        },
      },
      animation: {
        "move-in": "move-in 0.3s ease-out forwards",
        "move-out": "move-out 0.3s ease-out forwards",
        "zoom-out": "zoom-out 0.3s ease-out forwards",
        "zoom-in": "zoom-in 0.3s ease-out forwards",
        "logo-enter-lg": `logo-enter-lg ${LOGO_ENTER_ANIMATION_DURATION}s ${LOGO_ANIMATION_CURVE} forwards`,
        "logo-enter-xl": `logo-enter-xl ${LOGO_ENTER_ANIMATION_DURATION}s ${LOGO_ANIMATION_CURVE} forwards`,
        "logo-enter-mobile": `logo-enter-mobile ${LOGO_ENTER_ANIMATION_DURATION}s ${LOGO_ANIMATION_CURVE} forwards`,
        "logo-overflow-lg": `logo-overflow-lg ${LOGO_ENTER_ANIMATION_DURATION}s ${LOGO_ANIMATION_CURVE} forwards`,
        "logo-overflow-mobile": `logo-overflow-mobile ${LOGO_ENTER_ANIMATION_DURATION}s ${LOGO_ANIMATION_CURVE} forwards`,
        "main-logo-width-lg": `main-logo-width-lg ${LOGO_ENTER_ANIMATION_DURATION}s ${LOGO_ANIMATION_CURVE} forwards`,
        "main-logo-width-mobile": `main-logo-width-mobile ${LOGO_ENTER_ANIMATION_DURATION}s ${LOGO_ANIMATION_CURVE} forwards`,
        "header-height": `header-height ${
          LOGO_ENTER_ANIMATION_DURATION + 1
        }s ${LOGO_ANIMATION_CURVE} forwards`,
        "hero-icons-fade-in": `hero-icons-fade-in ${LOGO_ENTER_ANIMATION_DURATION}s linear forwards`,
        "header-links-opacity": `header-links-opacity ${LOGO_ENTER_ANIMATION_DURATION}s ease-in-out forwards`,
        "link-hover-on": "link-hover-on 0.3s ease-out forwards",
        "link-hover-off": "link-hover-off 0.3s ease-out forwards",
      },
    },
  },
  safelist: [
    "bg-card_bg_stat_service",
    "bg-card_bg_cloud_cash",
    "bg-card_bg_game_platform",
    "bg-card_bg_gas_monsters",
    "bg-card_bg_personal",
    "bg-card_bg_rzhd",
    "bg-card_bg_safety_platform",
    "bg-card_bg_sberbank",
  ],
  plugins: [],
};
