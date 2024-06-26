/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.html', ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),],

    daisyui: {
      themes: ["lemonade"], 
    },
}


