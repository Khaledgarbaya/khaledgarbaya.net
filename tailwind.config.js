module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
