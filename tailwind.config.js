/** @type {import('tailwindcss').Config} */
module.exports = {
  media: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  content: [ 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}

