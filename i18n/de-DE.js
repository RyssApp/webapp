export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      ryss: 'Ryss',
      general: {
        imprint: 'Impressum',
        terms: 'Nutzungsbestimmungen',
        loading: 'Laden'
      },
      mainPage: {
        searchPlaceholder: 'Suchen...',
        searchInfo: 'Suche Produkte in Läden in deiner Nähe.',
        aboutUs: 'Über Uns'
      },
      account: {
        login: 'Anmelden',
        eMail: 'E-Mail',
        username: 'Benutzername',
        password: 'Passwort',
        noAccountYet: 'Noch keinen Account?',
        register: 'Registrieren',
        alreadyRegistered: 'Schon ein Konto erstellt?',
        confirmPassword: 'Passwort bestätigen'
      },
      about: { wip: 'Wir arbeiten derzeit an einer Informationsseite, bitte habt noch etwas Geduld :)' }
    })
  })
}
