export default {
  target: 'static',

  components: [
    '~/components',
    '~/slices'
  ],

  telemtry: true,

  build: {
    transpile: ['nuxt-sm', 'vue-slicezone']
  },

  head: {
    description: 'Official System76 Blog',
    color: '#4e4540',

    titleTemplate: title => (title !== '') ? `${title} - System76 Blog` : 'System76 Blog',

    htmlAttrs: {
      lang: 'en',
      itemscope: true
    },

    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },

      { charset: 'utf-8' },

      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: 'Official System76 Blog' },
      { hid: 'og:title', property: 'og:title', content: 'System76 Blog' },
      { hid: 'og:description', property: 'og:description', content: 'Official System76 Blog' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'System76 Blog' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Official System76 Blog' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

    script: [
      {
        async: true,
        defer: true,
        'data-domain': 'blog.system76.com',
        src: 'https://plausible.io/js/plausible.js'
      },
      {
        innerHTML: 'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }'
      }
    ],

    __dangerouslyDisableSanitizers: ['script']
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@system76/design/dist/minimal.common.css',
    '@system76/components/dist/index.common.css',
    '~/assets/styles/main.css'
  ],

  plugins: [
    '~/plugins/components'
  ],

  buildModules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    'nuxt-sm',
    '@nuxtjs/prismic'
  ],

  loading: {
    color: '#6ACAD8',
    failedColor: '#dc4405'
  },

  image: {
    // Mirrored to tailwind breakpoints + some extra
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    }
  },

  prismic: {
    disableGenerator: true,
    endpoint: 'https://blog-system76.cdn.prismic.io/api/v2',
    linkResolver: '~/plugins/link-resolver',
    modern: true
  },

  storybook: {
    stories: ['~/slices/**/*.stories.js', '~/.slicemachine/assets/slices/**/*.stories.js']
  },

  ignore: ['**/*.stories.js']
}
