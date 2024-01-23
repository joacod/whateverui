/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Comfortaa Variable", "sans-serif"],
        body: ["Exo Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#687EFF",
        "primary-content": "#fff",
        "primary-focus": "#8697FF",
        "primary-active": "#A4B1FF",
        secondary: "#793FDF",
        "secondary-content": "#fff",
        "secondary-focus": "#9365E5",
        "secondary-active": "#AE8BEB",
        accent: "#F11A7B",
        "accent-content": "#fff",
        "accent-focus": "#F34795",
        "accent-active": "#F675AF",
        neutral: "#352F44",
        "neutral-content": "#FAF0E6",
        "neutral-focus": "#5C5470",
        "neutral-active": "#B9B4C7",
        success: "#36AE7C",
        "success-content": "#fff",
        warning: "#F9D923",
        "warning-content": "#000",
        error: "#EB5353",
        "error-content": "#fff",
        info: "#187498",
        "info-content": "#fff",
      },
    },
  },
  plugins: [],
};
