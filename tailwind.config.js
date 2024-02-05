
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
    colors: {
      'bg': 'rgba(0, 0, 0, 0.8)',
      'bgOpacity': '#fff',
      'mainBg': '#fff',
      'mainText': '#000',
      'subMainText': '#444',
      'iconBg': '#FF8C32',
      'iconbgHover': '#F0A500',
      'violet': '#fff',
    },
    // colors: {
    //   'bg': 'rgba(0, 0, 0, 0.8)',
    //   'bgOpacity': 'rgba(0, 0, 0, 0.6)',
    //   'mainBg': '#000',
    //   'mainText': '#ffff',
    //   'subMainText': '#d1d1d1',
    //   'iconBg': '#1e1e32',
    //   'iconbgHover': '#52527a',
    //   'violet': '#c082ff',
    // },
    extend: {
      animation: {
        'pulse-fast': 'pulse 1.5s linear infinite',
      }
    },
  },
  plugins: [],
}
