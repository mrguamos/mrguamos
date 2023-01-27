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
          type: 'text/partytown',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','G-41VBZZX1K2');`,
        },
      ],
      noscript: [
        {
          tagPosition: 'bodyOpen',
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-41VBZZX1K2" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
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
