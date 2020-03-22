export const i18n = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en-US.js'
    },
    {
      code: 'de',
      iso: 'de-DE',
      name: 'Deutsch',
      file: 'de-DE.js'
    }
  ],
  defaultLocale: 'de',
  vueI18n: {
    fallbackLocale: 'en'
  },
  lazy: true,
  langDir: 'i18n/',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'r_language'
  }
}
