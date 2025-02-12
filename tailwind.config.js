/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './docs/**/*.{html,js}'],
  // darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkVS: {
          bg: '#1c1c1c',
          bgMenuTop: '#403c3c',
          bgMenuHamburger: '#282424',
          bgMenuHamburgerHover: '#087cd4',
          bgMenuTopHover: '#484444',

          bgWindow: '#282424',
          bgTabInactive: '#302c2c',
          bgTabActive: '#201c1c',

          bgMenuLeft: '#383434',
          bgMenuLeftSelected: '#ffffff',
          bgSpanMenu: '#252526',
          bgExplorer: '#282424',
          textColor: '#bfbfbf',
          textColorSecundaryWelcome: '#2885ff',
          bgStatusBar: '#087ccc',
        },

        darkGithub: {
          bg: '#101414',
          bgMenuTop: '#101414',
          bgMenuHamburger: '#181c24',
          bgMenuHamburgerHover: '#403c4c',
          bgMenuTopHover: '#282c2c',
          bgWindow: '#08040c',
          bgTabInactive: '#08040c',
          bgTabActive: '#101414',
          bgMenuLeft: '#101414',
          bgMenuLeftSelected: '#f84c3c',
          bgSpanMenu: '#161b22',
          bgExplorer: '#08040c',
          TextColor: '#79818c',
          StatusBar: '#101414',
        },

      },
      width: {
        '42': '10.5rem',
        '54': '13.5rem',
      }
    },
  },
  plugins: [],
}

