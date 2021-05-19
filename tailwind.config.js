module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      title: ['Dosis', 'sans-serif'],
      general: ['Quicksand', 'sans-serif'],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'jet-black': {
        header: '#212121',
        main: '#383838',
        footer: '#0A0A0A'
      }
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
