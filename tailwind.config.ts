/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./resources/**/*.edge', './resources/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
    fontFamily: {
      mono: ['IBM Plex Mono'],
    },
  },
  plugins: [],
}
