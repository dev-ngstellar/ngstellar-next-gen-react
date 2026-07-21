/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-hover": "var(--card-hover)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "blur-reveal": "blur-reveal 1s ease-out forwards",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "blur-reveal": {
          "0%": { opacity: 0, filter: "blur(10px)" },
          "100%": { opacity: 1, filter: "blur(0)" },
        }
      }
    },
  },
  plugins: [],
}
