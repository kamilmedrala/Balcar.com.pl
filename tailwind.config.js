module.exports = {
    content: [
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.js',
      './nuxt.config.js',
    ],
    theme: {
      extend: {
        colors: {
          gold: {
            light:'#9D7C3E',
            dark:'#876b36'
          },
          gray: {
            lightest: '#F7F7F7',
            light: '#DDDDDD',
            dark: '#3B3A37',
          },
        },
        fontFamily:{
          'logo': ['OPTIEdgarBold','Titillium Web','ui-sans-serif', 'system-ui','-apple-system', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', 'sans-serif'],
          'body': ['Titillium Web','ui-sans-serif', 'system-ui','-apple-system', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', 'sans-serif']
        },
        screens:{
          'xs': '480px'
        }
      },
    },
    plugins: [],
  }