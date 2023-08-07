
const generator = function () {
  this.nuxt.hook('generate:done', async (context) => {
    const routes = Array.from(context.generatedRoutes)
    this.nuxt.options.sitemap.routes = [...routes]
  })
}

export default generator