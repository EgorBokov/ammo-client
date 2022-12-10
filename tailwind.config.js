/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    colors: {
      'light-gray': 'rgba(112, 128, 144, 0.3)',
      'bumblebee': 'rgb(255,215,44)',
      'success': 'rgb(64, 171, 89)',
      'error': 'rgb(232, 53, 0)',
      'white': '#FFFFFF',
      'modal-shadow': 'rgba(0, 0, 0, 0.4)'
    },
    extend: {
      boxShadow: {
        'header': '3px 0px 10px 1px rgba(0,0,0, .05)'
      }
    },
  },
  plugins: [],
}
