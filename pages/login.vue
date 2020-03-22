<template>
  <div class="login">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="title">
        {{ $t('ryss') }}
      </nuxt-link>
    </div>
    <div class="wrapper">
      <nuxt-link to="/" class="logo">
        <img class="source" src="/img/logo.svg">
      </nuxt-link>
      <h2 class="title">
        {{ $t("account.login") }}
      </h2>
      <p class="text">
        {{ $t(text) }}
      </p>
      <div class="controls">
        <input id="email" class="input" type="text" :placeholder="$t('account.eMail')" autocomplete="off">
        <input id="password" class="input" type="password" :placeholder="$t('account.password')">
        <a class="button" @click="login()">
          <fa-icon class="icon" icon="sign-in-alt" />
          {{ $t('account.login') }}
        </a>
      </div>
      <p class="question">
        {{ $t("account.noAccountYet") }}
        <nuxt-link :to="localePath('/register')">
          {{ $t('account.register') }}
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data () {
    return {
      text: null
    }
  },
  methods: {
    login () {
      const email = document.getElementById('email')
      const password = document.getElementById('password')

      const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ // eslint-disable-line

      if (email.value === '' && password.value === '') {
        this.text = 'account.loginPage.noInput'
      } else if (email.value === '') {
        this.text = 'account.registration.noEmail'
      } else if (password.value === '') {
        this.text = 'account.registration.noPassword'
      } else if (!regex.test(String(email.value).toLowerCase())) { // not working
        this.text = 'account.registration.provideValidEmail'
      } else {
        this.text = null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .top {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 16px;
    left: 16px;

    .title {
      font-family: var(--font);
      font-weight: 700;
      font-size: 32px;
      letter-spacing: .8px;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--lighter);
    border: solid 1px var(--light);
    height: 700px;
    width: 500px;
    border-radius: 16px;

    .logo {
      margin-bottom: 24px;

      .source {
        height: 100px;
        width: auto;
      }
    }

    .title {
      font-size: 24px;
      font-weight: 700;
      margin: 16px 0;
      color: var(--dark);
    }

    .text {
      margin-bottom: 8px;
      width: 240px;
      text-align: center;
      color: var(--red);
    }

    .controls {
      display: flex;
      flex-direction: column;
      align-items: center;

      .input {
        font-family: var(--font);
        font-size: 14px;
        border-radius: 48px;
        border: 1px solid var(--light);
        padding: 12px 18px;
        width: 240px;
        outline: none;
        transition: var(--transition);
        margin: 4px 0;

        &:focus, &:active {
          box-shadow: var(--shadow-all);
          border: 1px solid var(--light-dark);
        }
      }

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
        margin: 18px 0 8px 0;

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

    .question {
      margin-top: 12px;
    }
  }
}

@media only screen and (max-width: 500px) {
  .login {
  display: flex;
  flex-direction: row;
  justify-content: center;

    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: var(--light);
      border: none;
      height: 100%;
      width: 100%;
      border-radius: 0;
    }
  }
}
</style>
