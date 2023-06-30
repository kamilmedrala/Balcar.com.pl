module.exports = {
    content: [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    theme: {
      extend: {
        colors: {
          gold: '#9D7C3E',
          gray: {
            lightest: '#F7F7F7',
            light: '#DDDDDD',
            main: '#3B3A37',
            dark: '#3B3A37',
          },
        },
      },
    },
    plugins: [],
  }