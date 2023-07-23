// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  css: ['~/assets/css/main.css'],

  modules: [
    'nuxt-icon',
    'nuxt-vue3-google-signin'
  ],

  googleSignIn: {
    clientId: '776141756180-jt5qfpq16gn5so6ui4ena0v8ijvaeman.apps.googleusercontent.com'
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})