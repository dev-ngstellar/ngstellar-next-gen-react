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
        primary: {
          DEFAULT: "var(--primary-color)",
          hover: "var(--primary-hover)",
          glow: "var(--primary-glow)",
          light: "var(--primary-light)",
        },
        gold: {
          DEFAULT: "var(--accent-gold)",
          light: "#FDE68A",
        },
        background: "var(--bg-main)",
        surface: "var(--bg-surface)",
        card: "var(--bg-card)",
        text: {
          main: "var(--text-main)",
          muted: "var(--text-muted)",
          bright: "var(--text-bright)",
        },
        border: "var(--border-color)",
      },
      fontFamily: {
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'aurora': 'aurora 15s ease infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
    },
  },
  plugins: [],
}
