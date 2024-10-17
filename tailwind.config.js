/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'color1': '#FF7070',
        customRed: 'rgba(255, 112, 112, 0.58)',

      },
    },
  },
  plugins: [],
}

