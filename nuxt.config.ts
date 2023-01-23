// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxt/image-edge',
  ],
  css: ['/assets/global.css'],
  app: {
    head: {
      title: 'Mark Ryan Guamos',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'Mark Ryan Guamos Online Portfolio' },
      ],
    },
  },
  tailwindcss: {
    exposeConfig: true,
  },
})
