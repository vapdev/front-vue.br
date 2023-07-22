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
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    dark: {
      ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
      "primary": "blue",
      "primary-focus": "mediumblue",
    },
    light: {
      ...require("daisyui/src/theming/themes")["[data-theme=light]"],
      "primary": "#40B581",
      "primary-focus": "#33A06F",
      "secondary": "#F9F9F9",
      "secondary-focus": "#E5E5E5",
      "base-content": "#FFFFFF",
    },
  },
}