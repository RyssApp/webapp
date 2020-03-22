export default (context) => {
  return new Promise(function (resolve) {
    resolve({
      ryss: 'Ryss',
      general: {
        imprint: 'Imprint',
        terms: 'Terms',
        loading: 'Loading'
      },
      mainPage: {
        searchPlaceholder: 'Search ...',
        searchInfo: 'Search for products in stores near you.',
        aboutUs: 'About Us'
      },
      account: {
        login: 'Login',
        eMail: 'E-Mail',
        username: 'Username',
        password: 'Password',
        noAccountYet: 'No Account yet?',
        register: 'Register',
        alreadyRegistered: 'Already registered?',
        confirmPassword: 'Confirm Password'
      },
      about: {
        wip: 'We\'re working on an about page right now! Thank you for being patient :)'
      }
    })
  })
}
