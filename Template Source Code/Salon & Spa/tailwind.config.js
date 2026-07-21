/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        background: "var(--background-color)",
        surface: "var(--surface-color)",
        text: "var(--text-color)",
        "text-muted": "var(--text-muted)",
        border: "var(--border-color)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(200, 162, 122, 0.5)',
      },
      backgroundImage: {
        'aurora': 'linear-gradient(to right, var(--primary-color), var(--secondary-color))',
      }
    },
  },
  plugins: [],
}
