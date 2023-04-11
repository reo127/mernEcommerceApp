/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'customShadow': '0px 0px 5px #777',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

