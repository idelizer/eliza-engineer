/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'blue': '#cbfaf8',
        'gray': '#999999',
        'white': '#ffffff',
      },
    },
  },
  plugins: [],
}