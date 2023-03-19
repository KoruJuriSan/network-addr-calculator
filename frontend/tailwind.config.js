/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.jsx", "./**/*.jsx", "./**/**/**/*.jsx"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      title: "#82DBE0",
      primary: "#174EF2",
      primaryDarken: "#071D5F",
      secondary: "#9620F2",
      gradient1Blue: "#345ACC",
      gradient1Violet: "#521C97",
      gradient2Blue: "#4A74F0",
      gradient2Violet: "#7020F2",
      gradient3Blue: "#7AA4F6",
      gradient3Violet: "#A27AF8"
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
