/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  green: "class",
  content: ["./*.jsx", "./**/*.jsx", "./**/**/**/*.jsx"],
  theme: {
    colors: {
      black: "#111111",
      green: "#41E847",
      red: "#E84141",
      blue: "#4165E8",
      current: "currentColor",
      transparent: "transparent"
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
