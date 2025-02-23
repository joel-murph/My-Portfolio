/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderColor: {
        'primary': 'rgb(85, 81, 227)',
        'secondary': ' #E056FD'

      }
    },

    fontFamily: {
      "hero-font": "Sriracha",
    },
  },
  plugins: [],
};
