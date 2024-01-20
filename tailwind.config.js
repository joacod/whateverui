/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCFFE7",
        "primary-content": "#000",
        "primary-focus": "#E2E5CF",
        "primary-active": "#C9CCB8",
        secondary: "#BAD7E9",
        "secondary-content": "#000",
        "secondary-focus": "#A7C1D1",
        "secondary-active": "#94ACBA",
        accent: "#EB455F",
        "accent-content": "#000",
        "accent-focus": "#D33E55",
        "accent-active": "#BC374C",
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
