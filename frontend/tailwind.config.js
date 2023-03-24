/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.jsx", "./**/*.jsx", "./**/**/**/*.jsx"],
  theme: {
    colors: {
      black: "#040404",
      green: "#41E847",
      red: "#E84141",
      blue: "#4165E8"
    },
    extend: {
      spacing: {
        "126": "31.5rem"
      },
      screens: {
        'mq-35rem': { 'raw': '(max-width: 35rem)' },
      }
    }
  },
  plugins: [],
}
