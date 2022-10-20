export default function () {
  this.nuxt.hook('generate:done', (context) => {
    const exclude = ['/preview']
    const all = Array.from(context.generatedRoutes)
    const routes = all.filter(route => !exclude.includes(route))
    this.nuxt.options.sitemap.routes = [...routes]
  })
}
