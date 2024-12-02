/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#1a1b23',
        card: '#242632',
        accent: '#8b5cf6',
      },
    },
  },
  plugins: [],
};