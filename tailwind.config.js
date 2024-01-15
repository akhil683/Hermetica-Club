
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
      popppins: ['Poppins', 'sans-serif'],
    },
    // colors: {
    //   'mainBg': '#000',
    //   'mainText': '#fff',
    //   'subMainText': '#d1d1d1',
    //   'iconBg': '#F0A500',
    //   'iconbgHover': '#FF9F29',
    //   'violet': '#e2b714',
    // },
    colors: {
      'mainBg': '#000',
      // 1e1e32
      'mainText': '#ffffff',
      'subMainText': '#d1d1d1',
      'iconBg': '#1e1e32',
      // 2f2f50
      'iconbgHover': '#52527a',
      'violet': '#c082ff',
    },
    extend: {
      animation: {
        'pulse-fast': 'pulse 1.5s linear infinite',
      }
    },
  },
  plugins: [],
}