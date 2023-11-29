/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#B52184',
        'secondary': '#343193',
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      }
    },
  },
  plugins: [],
}