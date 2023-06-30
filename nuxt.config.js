export default {
  target: 'static',

  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
    axios: {
      baseURL: `${process.env.API_URL}/wp-json`
    }
  },

  head: {
    title: 'Balcar.com.pl',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/css/main.css'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/axios',
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
  ],

  build: {
  }
}
