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
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          light: 'var(--color-secondary-light)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          light: 'var(--color-accent-light)',
        },
        bg: {
          DEFAULT: 'var(--color-bg)',
          alt: 'var(--color-bg-alt)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          hover: 'var(--color-surface-hover)',
        },
        card: {
          DEFAULT: 'var(--color-card)',
          border: 'var(--color-card-border)',
        },
        text: {
          heading: 'var(--color-heading)',
          body: 'var(--color-body)',
          muted: 'var(--color-muted)',
        },
        border: 'var(--color-border)',
        gold: {
          50: '#fbf8ed',
          100: '#f5edd2',
          200: '#ebd9a8',
          300: '#dfbf76',
          400: '#d4a34b',
          500: '#c58b32',
          600: '#a76d27',
          700: '#855122',
          800: '#6f4222',
          900: '#5e3721',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
        'luxury': '0 20px 40px -15px rgba(11, 25, 44, 0.15)',
        'gold-glow': '0 0 25px rgba(212, 163, 75, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #dfbf76 0%, #c58b32 50%, #9a661f 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0b192c 0%, #1e293b 100%)',
      }
    },
  },
  plugins: [],
}
