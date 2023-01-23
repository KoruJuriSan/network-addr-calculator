/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.jsx", "./**/*.jsx", "./**/**/**/*.jsx"],
  theme: {
    colors: {
      primary: "#00FF19",
      secondary: "#040404",
      mistake: "#BB0000"
    },
    extend: {
      screens: {
        'bp-min-w-800px': { 'raw': '(max-width: 800px)' },
        'bp-min-w-1000px': { 'raw': '(max-width: 1000px)' },
      }
    }
  },
  plugins: [],
}
