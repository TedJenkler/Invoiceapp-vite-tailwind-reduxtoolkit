/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#373B53',
        'independence': '#494E6E',
        'coolgrey': '#858BB2',
        'ghostwhite': '#F9FAFE',
        'lightgrey': '#777F98',
        'lightbg': '#F8F8FB',
        'delete': '#EC5757',
        'paid': '#33D69F',
        'pending': '#FF8F00',
        'draft': '#979797',
        '12': '#141625',
        '08': '#0C0E16',
        '07': '#7E88C3',
        '06': '#888EB0',
        '05': '#DFE3FA',
        '04': '#252945',
        '03': '#1E2139',
        '01': '#7C5DFA',
      }
    },
  },
  plugins: [],
}
