/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#FFFFFF',
        'custom-transparent': 'rgba(255, 255, 255, 0)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #FFFFFF 20%, #FFFFFF 75%, rgba(255, 255, 255, 0.5) 95%, rgba(255, 255, 255, 0) 100%)',
      },
    },
  },
  plugins: [],
}