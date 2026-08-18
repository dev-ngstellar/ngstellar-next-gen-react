/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '901px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        mutedText: 'var(--color-muted)',
      },
      fontFamily: {
        sans: ['var(--font-family)', 'sans-serif'],
        heading: ['var(--font-family)', 'sans-serif'],
        body: ['var(--font-family)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'card': '0 15px 35px -5px rgba(0, 0, 0, 0.05), 0 5px 15px -5px rgba(0, 0, 0, 0.02)',
        'elevated': '0 25px 50px -12px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
