<template>
  <div class="navbar">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="title">
        {{ $t('ryss') }}
      </nuxt-link>
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
        {{ $t("account.login") }}
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
  height: 52px;

  .top {
    display: flex;
    flex-direction: row;

    .title {
      font-family: var(--font);
      font-weight: 700;
      font-size: 32px;
      letter-spacing: .8px;
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
</style>
