export const I18N = {
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
      name: 'Deutsch'
    }
  ],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en'
  },
  lazy: true,
  langDir: 'i18n/',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected'
  }
}
