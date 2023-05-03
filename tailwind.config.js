/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#15142C",
        belowNav1: "#AD1025",
        belowNav2: "rgba(8, 0, 200, 0.56)",
        section2Bg: "#DEDEDE"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

