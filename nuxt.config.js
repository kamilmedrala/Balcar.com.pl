export default {
  target: 'static',
  publicRuntimeConfig: {
    apiUrl: 'https://api.balcar.com.pl',
    axios: {
      baseURL: `https://api.balcar.com.pl/wp-json`
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
      { hid: 'description', name: 'description', 
        content: 'Profesjonalne usługi remontowo-budowlane, wykończenia, ocieplenia i wiele innych. Nasz doświadczony zespół wykonawców dostarczy kompleksowe rozwiązania dla Twojego projektu budowlanego!' 
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest"' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg',color: "#5bbad5" },
      { rel: 'preconnect', href: "https://fonts.googleapis.com"},
      { rel: 'preconnect', href: "https://fonts.gstatic.com", crossorigin: true},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;1,300&display=swap'}
    ],
  },

  css: [
    '@/assets/css/main.css'
  ],

  plugins: [
    '~/plugins/formatPageData.js',
    '~/plugins/fetchGeneralData.server.js'
  ],

  components: true,

  router:{
    base: '/Balcar.com.pl/',
  },
  
  pageTransition: {
    name: 'page',
    mode: '',
    afterEnter(){
      $nuxt.$emit('transitionEnd');
    }
  },

  buildModules: [
    '@nuxt/image',
    '@nuxtjs/axios',
  ],

  modules: [
    '@nuxtjs/sitemap'
  ],

  build: {
    standalone: true,
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      });
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  image: {
    domains: ['https://api.balcar.com.pl/'],
  },
}
