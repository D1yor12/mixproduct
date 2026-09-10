/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C8A45D',
          hover: '#D8B873',
          light: '#E5CCA0',
          dark: '#9E7E3B',
          glow: 'rgba(200, 164, 93, 0.15)',
        },
        dark: {
          DEFAULT: '#111111',
          bg: '#080808',
          card: '#141414',
          surface: '#1A1A1A',
          border: '#222222',
        },
        secondary: '#8A8A8A',
        light: '#F5F5F3',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(200, 164, 93, 0.12)',
        'gold-md': '0 0 25px rgba(200, 164, 93, 0.2)',
        'gold-lg': '0 0 40px rgba(200, 164, 93, 0.28)',
      },
    },
  },
  plugins: [],
}
