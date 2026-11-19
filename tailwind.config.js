/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#F7ECE3', 50: '#FCF7F3', 100: '#F7ECE3', 200: '#EFDCCF', 300: '#E5C9B8' },
        plum: { DEFAULT: '#4A1938', 700: '#6A2B52', 800: '#4A1938', 900: '#2E0F23' },
        gold: { DEFAULT: '#B38B4A', light: '#D9B877', dark: '#8A6A33' },
        rose: { DEFAULT: '#A4687A' },
        ink: '#2A1220',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Tajawal', '"Segoe UI"', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      boxShadow: { soft: '0 18px 50px -20px rgba(74,25,56,0.35)' },
    },
  },
  plugins: [],
}
