/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './docs/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {       //Dark(Visual Studio)
        'DarkbgDark': '#1c1c1c',  //Background color for dark mode
        'DarkbgMenuTop': '#403c3c', //Background color for top menu
        'DarkbgMenuHamburger': '#282424', //Background color for hamburger menu
        'DarkbgMenuHamburgerHover': '#087cd4', //Background color for hamburger menu hover
        'DarkbgMenuTopHover': '#484444', //Background color for top menu hover
        'DarkbgMenuLeft': '#383434',   //Background color for left menu
        'DarkbgMenuLeftSelected': '#ffffff', //Background color for left menu hover
        'DarkbgSpanMenu': '#252526', //Background color for span menu
        'DarkbgExplorer': '#282424', //Background color for explorer
        'DarktextColor': '#bfbfbf', //Text color for dark mode
        'DarkbgStatusBar': '#087ccc', //Background color for status bar

        //GitHub Dark Default
        'GitDbg': '#101414', //Background color for github dark
        'GitDbgMenuTop': '#101414', //Background color for github dark top menu
        'GitDbgMenuHamburger': '#181c24', //Background color for github dark hamburger menu
        'GitDbgMenuHamburgerHover': '#403c4c', //Background color for github dark hamburger menu hover
        'GitDbgMenuTopHover': '#282c2c', //Background color for github dark top menu hover
        'GitDbgMenuLeft': '#101414', //Background color for github dark left menu
        'GitDbgMenuLeftSelected': '#f84c3c', //Background color for github dark left menu
        'GitDbgSpanMenu': '#161b22', //Background color for github dark span menu
        'GitDbgExplorer': '#08040c', //Background color for github dark explorer
        'GithubDarkTextColor': '#79818c', //Text color for github dark
        'GitDbgStatusBar': '#101414', //Background color for github dark status bar

      },
      width: {
        '42': '10.5rem',
        '54': '13.5rem',
      }
    },
  },
  plugins: [],
}

