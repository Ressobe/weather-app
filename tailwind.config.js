/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        on_primary: "rgb(var(--color-on-primary) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        on_background: "rgb(var(--color-on-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        on_surface: "rgb(var(--color-on-surface) / <alpha-value>)",
        outline: "rgb(var(--color-outline) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
