module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      title: ['Dosis', 'sans-serif'],
      general: ['Quicksand', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
