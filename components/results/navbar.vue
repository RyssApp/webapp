<template>
  <div class="navbar">
    <div class="wrapper">
      <nuxt-link :to="localePath('/')" class="logo">
        <img class="source" src="/img/logo.svg">
      </nuxt-link>
      <div class="search">
        <input
          id="bar"
          class="bar"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search ..."
          @input="completeSearch()"
          @keyup.enter="searchProducts()"
        >
        <a class="submit" @click="searchProducts()">
          <svg class="magnifier" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="path" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
        </a>
      </div>
    </div>
    <div class="span" />
    <div class="language">
      <div id="language-icon" class="symbol">
        <fa-icon class="icon" icon="language" />
      </div>
      <div id="language-picker" class="picker">
        <div class="wrapper">
          <nuxt-link
            v-for="locale in locales"
            :key="locale.code"
            class="language"
            :to="switchLocalePath(locale.code)"
          >
            <img class="flag" :src="getImagePath(locale.iso)">
            <p class="name">
              {{ locale.name }}
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <profile v-if="isLoggedIn" />
    <div v-else class="login">
      <nuxt-link :to="localePath('/login')" class="button">
        <fa-icon class="icon" icon="sign-in-alt" />
        <p class="content">
          {{ $t('account.login') }}
        </p>
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
      isLoggedIn: this.$auth.isLoggedIn(),
      locales: this.$i18n.locales
    }
  },
  mounted () {
    this.$nextTick(() => {
      const input = document.getElementById('bar')
      input.value = this.$route.query.query

      const languageIcon = document.getElementById('language-icon')
      const languagePicker = document.getElementById('language-picker')

      languageIcon.onmouseenter = (event) => {
        languagePicker.style.display = 'flex'
      }

      languageIcon.onmouseleave = (event) => {
        languagePicker.style.display = 'none'
      }

      languagePicker.onmouseenter = (event) => {
        languagePicker.style.display = 'flex'
      }

      languagePicker.onmouseleave = (event) => {
        languagePicker.style.display = 'none'
      }
    })
  },
  methods: {
    completeSearch (query) {

    },
    searchProducts (query) {
      const input = document.getElementById('bar')

      if (input.value !== '') {
        this.$router.push(`/search?query=${encodeURIComponent(input.value)}`)
        input.blur()
      }
    },
    getImagePath (iso) {
      return `/img/lang/${iso}.png`
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
  height: 52px;

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
        font-family: var(--font);

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

  .span {
    flex: 1;
  }

  .language {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 24px;
    position: relative;

    .symbol {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      height: 100%;
      cursor: pointer;

      .icon {
        font-size: 32px;
        color: var(--dark);
      }

      &:hover {

        .icon {
          color: var(--darker);
        }
      }
    }

    .picker {
      display: none;
      flex-direction: column;
      position: absolute;
      margin-top: 52px;
      right: 0;
      z-index: 999999999999;

      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 8px 0;
        padding: 12px;
        border: 1px solid var(--light);
        border-radius: 8px;
        background: var(--lighter);
        box-shadow: var(--shadow-bottom);

        .language {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 8px;
          opacity: .75;

          &:hover {
            opacity: 1;
          }

          &:last-child {
            margin-bottom: 0;
          }

          .flag {
            width: 28px;
            height: auto;
            margin-right: 8px;
          }

          .name {
            font-size: 16px;
            color: var(--dark);
          }
        }
      }
    }
  }

  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .button {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 48px;
      border: solid 1px var(--light);
      color: var(--darker);
      background: var(--white);
      font-size: 18px;
      font-family: var(--font);
      cursor: pointer;
      padding: 12px 24px;
      text-align: center;
      user-select: none;

      .icon {
        margin-right: 8px;
      }

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

@media only screen and (max-width: 1000px) {
  .navbar {

    .wrapper {
      width: 100%;

      .search {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: relative;
        width: 100%;
        margin: 0 25px 0 0;

        .bar {
          font-size: 16px;
          border-radius: 48px;
          border: 1px solid var(--light);
          padding: 16px 22px;
          width: 100%;

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
  }
}

@media only screen and (max-width: 600px) {
  .navbar {

    .wrapper {

      .logo {
        display: none;
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  .navbar {

    .login {

      .button {
        padding: 12px 10px 12px 14px;

        .content {
          display: none;
        }
      }
    }
  }
}
</style>
