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
          50: 'var(--primary-50, #f0fdf4)',
          100: 'var(--primary-100, #dcfce7)',
          500: 'var(--primary-color, #0f766e)',
          600: 'var(--primary-hover, #0d9488)',
          700: 'var(--primary-700, #0f766e)',
        },
        surface: {
          light: '#ffffff',
          dark: '#0f172a',
          cardLight: '#ffffff',
          cardDark: '#1e293b',
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glass-hover': '0 12px 40px 0 rgba(0, 0, 0, 0.15)',
        'glow': '0 0 25px -5px var(--primary-color)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
