import { createFeed, updateRssFile } from './plugins/generateRss.js' // eslint-disable-line import/named

import { apiEndpoint } from './sm.json'
const prismicApiUrl = apiEndpoint

const HOST =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://blog.system76.com'

export default {
  target: 'static',

  components: ['~/components', { path: '~/slices', extensions: ['vue'] }],

  telemtry: true,

  build: {
    transpile: ['nuxt-sm', 'vue-slicezone']
  },

  env: { HOST },

  head: {
    description: 'Official System76 Blog',
    color: '#4e4540',

    titleTemplate: title =>
      title !== '' ? `${title} - System76 Blog` : 'System76 Blog',

    htmlAttrs: {
      lang: 'en',
      itemscope: true
    },

    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },

      { charset: 'utf-8' },

      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',
        name: 'description',
        content: 'Official System76 Blog'
      },

      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'System76 Blog'
      },
      { hid: 'og:title', property: 'og:title', content: 'System76 Blog' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Official System76 Blog'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${HOST}/images/social.jpg`
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'The Blog of System76'
      },
      { hid: 'og:image:width', property: 'og:image:width', content: 500 },
      { hid: 'og:image:height', property: 'og:image:height', content: 1000 },

      { hid: 'twitter:title', name: 'twitter:title', content: 'System76 Blog' },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Official System76 Blog'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@system76' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:image:src',
        name: 'twitter:image:src',
        content: `${HOST}/images/social.jpg`
      }
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

    script: [
      {
        async: true,
        defer: true,
        'data-domain': 'blog.system76.com',
        src: 'https://plausible.io/js/plausible.outbound-links.js'
      },
      {
        innerHTML:
          'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }'
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

  plugins: ['~/plugins/components', '~/plugins/font-awesome'],

  buildModules: ['@nuxt/image', '@nuxtjs/tailwindcss'],

  modules: ['nuxt-sm', '@nuxtjs/prismic', '@nuxtjs/sitemap', '@nuxtjs/feed'],

  loading: {
    color: '#6ACAD8',
    failedColor: '#dc4405'
  },

  generate: {
    fallback: '404.html'
  },

  image: {
    domains: ['https://images.prismic.io'],
    provider: 'static',
    prismic: {},

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

  tailwindcss: {
    cssPath: '~assets/styles/tailwind.css'
  },

  prismic: {
    disableGenerator: true,
    endpoint: prismicApiUrl,
    linkResolver: '~/plugins/link-resolver',
    modern: true
  },

  sitemap: {
    hostname: HOST
  },

  feed: [
    {
      path: '/rss.xml',
      type: 'rss2',
      create: async feed => await createFeed(feed, HOST)
    }
  ],

  storybook: {
    stories: [
      '~/slices/**/*.stories.js',
      '~/.slicemachine/assets/slices/**/*.stories.js'
    ]
  },

  ignore: ['**/*.stories.js'],

  hooks: {
    // happens after the static site is generated
    close: async () => {
      await updateRssFile() // manually add xsl stylesheet to rss.xml
    }
  }
}
