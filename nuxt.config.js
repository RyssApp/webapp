export default {
  mode: 'universal',
  head: {
    title: 'Ryss',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'author', name: 'author', content: 'Oskar Lang' },
      { hid: 'publisher', name: 'publisher', content: 'Ryss App' },
      { hid: 'image', name: 'image', content: 'TODO' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'application-name', name: 'application-name', content: 'Ryss' },
      { hid: 'theme-color', name: 'theme-color', content: '#78a4fa' },
      { hid: 'og:title', property: 'og:title', content: 'Ryss' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Ryss' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://ryss.app' },
      { hid: 'og:description', property: 'og:description', content: '' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'og:image', property: 'og:image', content: 'TODO' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '500' },
      { hid: 'og:image:height', property: 'og:image:height', content: '500' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Ryss logo' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@rxsto_official' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap' }
    ]
  },
  loading: { color: '#469c30' },
  css: [
    '@/static/css/reset.css',
    '@/static/css/default.css'
  ],
  plugins: [
    '@/plugins/auth.js'
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/universal-storage',
    'nuxt-leaflet'
  ],
  storage: {
    cookie: {
      prefix: 'r_',
      options: {
        path: '/'
      }
    }
  },
  build: {
    extend (config, ctx) {
    }
  }
}
