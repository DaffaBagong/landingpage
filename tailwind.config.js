/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'tailwind': "url('/src/img/bgtailwind.png')"
      },


      colors: {
        sapwannn: '#ff00ea',
        primary: '#5268F4',
      }
    },
  },
  plugins: [],
}
