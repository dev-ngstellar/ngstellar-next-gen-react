/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary, #0F4C81)',
          light: 'var(--color-primary-light, #1d6fae)',
          dark: 'var(--color-primary-dark, #0b375d)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary, #00B4D8)',
          light: 'var(--color-secondary-light, #33c3e0)',
          dark: 'var(--color-secondary-dark, #0090ad)',
        },
        accent: {
          DEFAULT: 'var(--color-accent, #10B981)',
          light: 'var(--color-accent-light, #34d399)',
          dark: 'var(--color-accent-dark, #059669)',
        },
        dark: {
          DEFAULT: 'var(--color-dark, #0F172A)',
          light: '#1E293B',
          darker: '#020617',
        },
        light: {
          DEFAULT: 'var(--color-light, #F8FAFC)',
          card: '#FFFFFF',
          darker: '#E2E8F0',
        }
      },
      fontFamily: {
        headings: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(15, 23, 42, 0.05)',
        'premium-hover': '0 20px 40px -15px rgba(15, 23, 42, 0.12)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      }
    },
  },
  plugins: [],
}
