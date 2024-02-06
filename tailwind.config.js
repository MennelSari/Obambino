/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'raleway': ['Raleway', 'sans-serif'],
      'fredoka': ['Fredoka One', 'cursive'],
    },
  },
    plugins: [require("daisyui")],
  }
