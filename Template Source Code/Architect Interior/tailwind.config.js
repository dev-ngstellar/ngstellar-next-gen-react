/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        background: "var(--background-color)",
        surface: "var(--surface-color)",
        text: {
          main: "var(--text-main)",
          muted: "var(--text-muted)",
        },
        border: "var(--border-color)",
      },
      fontFamily: {
        heading: ['Cinzel', 'Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
