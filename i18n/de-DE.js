export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      ryss: 'Ryss',
      general: {
        imprint: 'Impessum',
        terms: 'Nutzungsbestimmungen'
      },
      mainPage: {
        searchPlaceholder: 'Search ...',
        searchInfo: 'Search for products in stores near you.',
        aboutUs: 'Über Uns'
      },
      account: {
        login: 'Anmelden',
        eMail: 'E-Mail',
        password: 'Passwort',
        noAccountYet: 'No Account yet?',
        register: 'Registrieren'
      },
      about: { wip: 'We\'re working on an about page right now! Thank you for being patient :)' }
    })
  })
}
