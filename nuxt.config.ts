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
    '@nuxtjs/partytown',
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
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-41VBZZX1K2',
          async: true,
          type: 'text/partytown',
        },
      ],
    },
  },
  tailwindcss: {
    exposeConfig: true,
  },
  partytown: {
    forward: ['dataLayer.push'],
  },
})
