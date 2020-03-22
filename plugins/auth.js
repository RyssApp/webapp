export default ({ app }, inject) => {
  const auth = {
    getToken () {
      return app.$apolloHelpers.getToken()
    },

    isLoggedIn () {
      return typeof this.getToken() === 'string'
    },

    logout () {
      app.$apolloHelpers.onLogout()
      window.location.reload()
    },

    login (token) {
      app.$apolloHelpers.onLogin(token)
    }
  }

  app.$auth = auth
  inject('auth', auth)
}
