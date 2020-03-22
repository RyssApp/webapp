import { I18N } from './i18n/config'

// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  mode: 'universal',
  head: {
    title: 'Ryss',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Ryss is searching for products in stores near you.' },
      { hid: 'author', name: 'author', content: 'Oskar Lang' },
      { hid: 'publisher', name: 'publisher', content: 'Ryss App' },
      { hid: 'image', name: 'image', content: 'https://ryss.app/img/logo.png' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'application-name', name: 'application-name', content: 'Ryss' },
      { hid: 'theme-color', name: 'theme-color', content: '#70d156' },
      { hid: 'og:title', property: 'og:title', content: 'Ryss' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Ryss' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://ryss.app' },
      { hid: 'og:description', property: 'og:description', content: 'Ryss is searching for products in stores near you.' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'og:image', property: 'og:image', content: 'https://ryss.app/img/logo.png' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '500' },
      { hid: 'og:image:height', property: 'og:image:height', content: '500' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Ryss logo' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@rxsto_official' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap' }
    ]
  },
  loading: { color: '#469c30' },
  css: [
    '@/static/css/reset.css',
    '@/static/css/default.css'
  ],
  plugins: [
    '@/plugins/auth.js',
    '@/plugins/query.js'
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/universal-storage',
    '@nuxtjs/apollo',
    'nuxt-leaflet',
    ['nuxt-i18n', I18N]
  ],
  storage: {
    cookie: {
      prefix: 'r_',
      options: {
        path: '/'
      }
    }
  },
  fontawesome: {
    component: 'fa',
    suffix: true,
    icons: {
      solid: [
        'faSignInAlt',
        'faSignOutAlt',
        'faPen',
        'faLanguage',
        'faCheckCircle',
        'faTimesCircle',
        'faTimes'
      ]
    }
  },
  apollo: {
    tokenName: 'r_token',
    cookieAttributes: {
      expires: 1
    },
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api.ryss.app',
        browserHttpEndpoint: 'https://api.ryss.app/graphql',
        httpLinkOptions: {
          credentials: 'omit'
        },
        tokenName: 'r_token'
      }
    }
  },
  pwa: {
    icon: {
      iconSrc: 'static/img/logo.png'
    }
  },
  build: {
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
    extend (config, ctx) {
    }
  }
}
