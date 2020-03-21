<template>
  <div class="navbar">
    <div class="wrapper">
      <nuxt-link to="/" class="logo">
        <img class="source" src="/img/logo.svg">
      </nuxt-link>
      <div class="search">
        <input id="bar" class="bar" type="text" @input="completeSearch()" @keyup.enter="searchProducts()">
        <a class="submit" @click="searchProducts()">
          <svg class="magnifier" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="path" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
        </a>
      </div>
    </div>
    <profile v-if="isLoggedIn" />
    <div v-else class="login">
      <nuxt-link to="/login" class="button">
        Login
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import profile from '@/components/parts/profile'

export default {
  components: {
    profile
  },
  data () {
    return {
      isLoggedIn: this.$auth.isLoggedIn()
    }
  },
  mounted () {
    this.$nextTick(() => {
      const input = document.getElementById('bar')
      input.value = this.$route.query.query
    })
  },
  methods: {
    completeSearch (query) {

    },
    searchProducts (query) {

    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  background: var(--lighter);
  border-bottom: solid 1px var(--light);

  .wrapper {
    display: flex;
    flex-direction: row;

    .logo {
      margin-right: 25px;

      .source {
        height: 50px;
        width: auto;
      }
    }

    .search {
      display: flex;
      flex-direction: row;
      justify-content: center;
      position: relative;

      .bar {
        font-size: 16px;
        border-radius: 48px;
        border: 1px solid var(--light);
        padding: 16px 22px;
        width: 580px;
        outline: none;
        transition: var(--transition);

        &:focus, &:active {
          border: 1px solid var(--light-dark);
          box-shadow: var(--shadow-all);
        }
      }

      .submit {
        height: 52px;
        width: 52px;
        position: absolute;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 8px;
        cursor: pointer;

        .magnifier {
          height: 32px;
          width: 32px;

          .path {
            fill: var(--primary-dark);
          }
        }
      }
    }
  }

  .login {
    display: flex;
    flex-direction: column;

    .button {
      border-radius: 8px;
      border: solid 1px var(--light-dark);
      background: var(--lighter);
      color: var(--darker);
      font-size: 16px;
      font-family: var(--font);
      cursor: pointer;
      box-shadow: var(--shadow-bottom);
      padding: 8px;
      width: 48px;
      text-align: center;
      user-select: none;

      &:hover {
        transform: translateY(-2px);
      }

      &:focus, &:active {
        transform: translateY(2px);
        box-shadow: none;
      }
    }
  }
}
</style>
