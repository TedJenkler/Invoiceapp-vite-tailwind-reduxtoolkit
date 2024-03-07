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
        '08': '#0C0E16',
        '06': '#888EB0',
      }
    },
  },
  plugins: [],
}
