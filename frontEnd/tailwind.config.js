/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        's': {'min': '0px', 'max': '700px'}, // Small screens: 0px to 700px
        'm': {'min': '701px', 'max': '900px'}, // Medium screens: 701px to 900px
        'lag': {'min': '901px', 'max': '1050px'}, // Large screens: 901px to 1050px
        'xlag': {'min': '1051px', 'max': '2475px'}, // Extra-large screens: 1051px to 2475px
      },
      
    },
  },
  plugins: [],
}
