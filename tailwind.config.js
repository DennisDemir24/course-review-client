module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'push-search-bar': 'pushUp .3s ease-out forwards'
      },
      keyframes: {
        'pushUp': {
          '0%': {
            transform: "translate(-50%, -50%)"
          },
          '100%': {
            transform: "translate(-50%, 0)",
            top: "0"
          }
        }
      }
    },
    fontFamily: {
      title: ['Dosis', 'sans-serif'],
      general: ['Quicksand', 'sans-serif'],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'jet-black': {
        '300': '#383838',
        '400': '#212121',
        '500': '#0A0A0A'
      }
    }),
    maxHeight: {
      'course-info': '60vh',
    },
    minHeight: {
      'screen-85': '85vh',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
