export default {
  target: 'static',
  router: {
    base: '/Balcar.com.pl/'
  },
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
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
