/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['mytheme'],
    mytheme: {
      "primary": "#41B883",    // Vue 3 Primary Color
      "secondary": "#EFC84A",  // Vue 3 Secondary Color
      "accent": "#35495E",     // Vue 3 Accent Color
      "neutral": "#f9fafb",    // Vue 3 Neutral Color
      "base-100": "#ffffff",
      "info": "#3abff8",
      "success": "#36d399",
      "warning": "#fbbd23",
      "error": "#f87272",
    },
  },
}