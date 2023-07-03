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
          gold: '#9D7C3E',
          gray: {
            lightest: '#F7F7F7',
            light: '#DDDDDD',
            dark: '#3B3A37',
          },
        },
      },
    },
    plugins: [],
  }