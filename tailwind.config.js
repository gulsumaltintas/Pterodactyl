/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans - serif'],
        noto: ['Noto Sans JP', 'sans-serif'],
      },
      colors: {
        title: '#1e293b',
        titles: '#64748b',
        backgraund: '#475569',
        text: '#f1f5f9',
        menu: '#cbd5e1',
        line: '#0891b2',
        restart: '#9ca3af',
        stop: '#dc2626',
      },
    },
  },
  plugins: [],
}
