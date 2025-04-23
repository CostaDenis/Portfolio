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
          MenuTopHover: 'var(--MenuTopHover)',
          TextColorMenuTop: 'var(--TextColorMenuTop)',
          MenuHamburguer: 'var(--MenuHamburguer)',
          MenuHamburguerHover: 'var(--MenuHamburguerHover)',
          MenuHamburguerText: 'var(--MenuHamburguerText)',
          MenuHamburguerHoverText: 'var(--MenuHamburguerHoverText)',
          MenuTopHover: 'var(--MenuTopHover)',
          Window: 'var(--Window)',
          WindowBorder: 'var(--WindowBorder)', //Implementar
          TextTabActive: 'var(--TextTabActive)', //Implementar
          TextTabInactive: 'var(--TextTabInactive)', //Implementar
          TabInactive: 'var(--TabInactive)', //Implementar
          TabActive: 'var(--TabActive)', //Implementar
          MenuLeft: 'var(--MenuLeft)',
          MenuLeftSelect: 'var(--MenuLeftSelect)',
          SpanMenu: 'var(--SpanMenu)',
          TextColorSpanMenu: 'var(--TextColorSpanMenu)',
          Explorer: 'var(--Explorer)',
          ExplorerTextColor: 'var(--ExplorerTextColor)',
          TextColor: 'var(--TextColor)',
          ColorSecundary: 'var(--ColorSecundary)',
          StatusBar: 'var(--StatusBar)',
          TextColorStatusBar: 'var(--TextColorStatusBar)',
          ButtonColor: 'var(--ButtonColor)',
          TextColorButton: 'var(--TextColorButton)',
          ColorBorderRM: 'var(--ColorBorderRM)',
          ColorTextRM: 'var(--ColorTextRM)',
        },
      },
      width: {
        '42': '10.5rem',
        '54': '13.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

