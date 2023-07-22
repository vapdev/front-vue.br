// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-icon', '@vueuse/nuxt', '@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  colorMode: {
    preference: 'light', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },

  devtools: {
    enabled: true,
  },

  imports: {
    dirs: ['stores']
  },
})