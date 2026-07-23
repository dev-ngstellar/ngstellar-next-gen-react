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
        brand: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          500: 'var(--primary-color)',
          600: 'var(--primary-hover)',
          700: 'var(--primary-700)',
          900: 'var(--primary-900)',
          glow: 'var(--accent-glow)',
        },
        surface: {
          bg: 'var(--bg-color)',
          card: 'var(--card-bg)',
          cardHover: 'var(--card-hover-bg)',
          border: 'var(--border-color)',
          glass: 'var(--glass-bg)',
          glassBorder: 'var(--glass-border)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      boxShadow: {
        'glow': '0 0 25px -5px var(--accent-glow)',
        'glow-lg': '0 0 50px -10px var(--accent-glow)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
};
