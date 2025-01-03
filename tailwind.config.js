/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './docs/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'bgDark': '#1c1c1c',  //Background color for dark mode
        'bgMenuTop': '#403c3c', //Background color for top menu
        'bgMenuTopHover': '#484444', //Background color for top menu hover
        'bgMenuLeft': '#383434',   //Background color for left menu
        'bgSpanMenu': '#252526', //Background color for span menu
        'bgExplorer': '#282424', //Background color for explorer
        'textColorMenu': '#bfbfbf', //Text color for dark mode

      },
    },
  },
  plugins: [],
}

