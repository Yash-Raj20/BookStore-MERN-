/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}