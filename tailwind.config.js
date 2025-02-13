/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    './docs/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        darkVS: {
          bg: 'var(--bg)',
          MenuTop: 'var(--MenuTop)',
          MenuHamburger: 'var(--MenuHamburger)',
          MenuHamburgerHover: 'var(--MenuHamburgerHover)',
          MenuTopHover: 'var(--MenuTopHover)',
          Window: 'var(--Window)',
          TabInactive: 'var(--TabInactive)',
          TabActive: 'var(--TabActive)',
          MenuLeft: 'var(--MenuLeft)',
          MenuLeftSelected: 'var(--MenuLeftSelected)',
          SpanMenu: 'var(--SpanMenu)',
          Explorer: 'var(--Explorer)',
          textColor: 'var(--textColor)',
          textColorSecundaryWelcome: 'var(--textColorSecundaryWelcome)',
          StatusBar: 'var(--StatusBar)',
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

