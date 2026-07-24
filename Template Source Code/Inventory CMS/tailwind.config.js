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
        bg: {
          main: 'var(--color-bg)',
          card: 'var(--color-card)',
          surface: 'var(--color-surface)',
          sidebar: 'var(--color-sidebar)',
          hover: 'var(--color-hover)',
          active: 'var(--color-active)',
        },
        border: {
          subtle: 'var(--color-border-subtle)',
          main: 'var(--color-border)',
          focus: 'var(--color-border-focus)',
        },
        txt: {
          main: 'var(--color-text)',
          heading: 'var(--color-heading)',
          muted: 'var(--color-muted)',
        },
        accent: {
          primary: 'var(--color-primary)',
          primaryHover: 'var(--color-primary-hover)',
          secondary: 'var(--color-secondary)',
          glow: 'var(--color-accent)',
          success: 'var(--color-success)',
          warning: 'var(--color-warning)',
          danger: 'var(--color-danger)',
        }
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px var(--color-primary-glow)',
        'glow-md': '0 0 30px -5px var(--color-primary-glow)',
        'card-glow': 'var(--shadow-card)',
        'float': '0 20px 40px -15px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
