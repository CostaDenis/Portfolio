/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './docs/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {       //Dark(Visual Studio)
        'DarkbgDark': '#1c1c1c',
        'DarkbgMenuTop': '#403c3c',
        'DarkbgMenuHamburger': '#282424',
        'DarkbgMenuHamburgerHover': '#087cd4',
        'DarkbgMenuTopHover': '#484444',

        'DarkbgWindow': '#282424',
        'DarkbgTabInactive': '#302c2c',
        'DarkbgTabActive': '#201c1c',

        'DarkbgMenuLeft': '#383434',
        'DarkbgMenuLeftSelected': '#ffffff',
        'DarkbgSpanMenu': '#252526',
        'DarkbgExplorer': '#282424',
        'DarktextColor': '#bfbfbf',
        'DarktextColorSecundaryWelcome': '#2885ff',
        'DarkbgStatusBar': '#087ccc',

        //GitHub Dark Default
        'GitDbg': '#101414',
        'GitDbgMenuTop': '#101414',
        'GitDbgMenuHamburger': '#181c24',
        'GitDbgMenuHamburgerHover': '#403c4c',
        'GitDbgMenuTopHover': '#282c2c',

        'GitDbgWindow': '#08040c',
        'GitDbgTabInactive': '#08040c',
        'GitDbgTabActive': '#101414',


        'GitDbgMenuLeft': '#101414',
        'GitDbgMenuLeftSelected': '#f84c3c',
        'GitDbgSpanMenu': '#161b22',
        'GitDbgExplorer': '#08040c',
        'GithubDarkTextColor': '#79818c',
        'GitDbgStatusBar': '#101414',

      },
      width: {
        '42': '10.5rem',
        '54': '13.5rem',
      }
    },
  },
  plugins: [],
}

