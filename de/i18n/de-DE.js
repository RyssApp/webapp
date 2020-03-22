export default context => {
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
                aboutUs: 'About Us',
                WIP: 'This app is a work in progress! Functionality might be missing!'
            },
            account: {
                login: 'Login',
                eMail: 'E-Mail',
                username: 'Username',
                password: 'Password',
                noAccountYet: 'No Account yet?',
                register: 'Register',
                alreadyRegistered: 'Already registered?',
                confirmPassword: 'Confirm Password',
                registration: {
                    provideValidEmail: 'You have to provide a valid e-mail address!',
                    unequalPasswords: 'Your passwords do not equal each other!',
                    usernameTooLong: 'Your username should not exceed 32 characters!',
                    usernameTooShort: 'Your username should contain atleast 5 characters!',
                    missingConfirm: 'You have to confirm your password!',
                    noPassword: 'You have to provide your password!',
                    noEmail: 'You have to provide your e-mail address!',
                    noInput: 'You have to provide your username, your e-mail address as well as your password!'
                },
                loginPage: {
                    noInput: 'You have to provide your e-mail address as well as your password!',
                    eMailVerification: 'We\'ve sent you an email!'
                }
            },
            about: { wip: 'We\'re working on an about page right now! Thank you for being patient :)' }
        });
    });
};