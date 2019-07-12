module.exports = {
  theme: {
    backgroundColor: theme => ({
      'primary': '#9d1996',
      'secondary': '#14a5a9'
    }),
    textColor: {
      'primary': '#9d1996',
      'secondary': '#14a5a9',
      'white': '#fff' 
    },
    borderColor: theme => ({
      ...theme('colors'),
      'primary': '#9d1996',
      'secondary': '#14a5a9'
    }),
    extend: {}
  },
  variants: {},
  plugins: []
}
