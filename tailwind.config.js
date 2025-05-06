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
          MenuLeft: 'var(--MenuLeft)',
          MenuLeftSelect: 'var(--MenuLeftSelect)',
          SpanMenu: 'var(--SpanMenu)',
          TextColorSpanMenu: 'var(--TextColorSpanMenu)',
          TextColor: 'var(--TextColor)',
          ColorSecundary: 'var(--ColorSecundary)',
          StatusBar: 'var(--StatusBar)',
          TextColorStatusBar: 'var(--TextColorStatusBar)',
          ButtonColor: 'var(--ButtonColor)',
          TextColorButton: 'var(--TextColorButton)',
          ColorBorderRM: 'var(--ColorBorderRM)',
          ColorTextRM: 'var(--ColorTextRM)',
          BracketColor: 'var(--BracketColor)',
          KeyColor: 'var(--KeyColor)',
          ValueColor: 'var(--ValueColor)',
          CommaColor: 'var(--CommaColor)'
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

