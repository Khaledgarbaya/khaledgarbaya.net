const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  variants: {
    extend: {
      backgroundClip: ['hover', 'focus'],
    },
  },
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
