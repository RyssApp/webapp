export default ({ app, store, redirect }, inject) => {
  const auth = {
    getToken () {
      const token = app.$storage.getCookie('token')
      if (token !== null) {
        return token
      } else {
        return redirect('/login')
      }
    },

    isLoggedIn () {
      return typeof app.$storage.getCookie('token') !== 'undefined'
    },

    logout () {
      app.$storage.removeCookie('token')
    }
  }

  app.$auth = auth
  inject('auth', auth)
}
