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
        confirmPassword: 'Passwort bestätigen',
        registration: {
          provideValidEmail: 'Du musst eine gültige E-Mail Addresse angeben!',
          unequalPasswords: 'Die Passwörter stimmen nicht überein!',
          usernameTooLong: 'Der Benutzername sollte nicht länger als 32 Zeichen sein!',
          usernameTooShort: 'Dein Benutzername sollte mindestens 5 Zeichen lang sein!',
          missingConfirm: 'Du musst dein Passwort bestätigen!',
          noPassword: 'Du musst ein Password angeben',
          noEmail: 'Du musst eine E-Mail Addresse angeben!',
          noInput: 'Du musst einen Benutzernamen, eine E-Mail Adresse und ein Passwort angeben!'
        }
      },
      about: { wip: 'Wir arbeiten derzeit an einer Informationsseite, bitte habt noch etwas Geduld :)' }
    })
  })
}
