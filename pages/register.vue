<template>
  <div class="register">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="title">
        {{ $t('ryss') }}
      </nuxt-link>
    </div>
    <div class="wrapper">
      <nuxt-link :to="localePath('/')" class="logo">
        <img class="source" src="/img/logo.svg">
      </nuxt-link>
      <h2 class="title">
        {{ $t("account.register") }}
      </h2>
      <p v-if="text" class="text">
        {{ $t(text) }}
      </p>
      <div class="controls">
        <input
          id="username"
          v-model="credentials.username"
          class="input"
          type="text"
          :placeholder="$t('account.username')"
          autocomplete="off"
          @keyup.enter="register()"
        >
        <input
          id="email"
          v-model="credentials.email"
          class="input"
          type="text"
          :placeholder="$t('account.eMail')"
          autocomplete="off"
          @keyup.enter="register()"
        >
        <a v-if="passwordStrength" id="strength" class="strength">
          {{ passwordStrength }}
        </a>
        <input
          id="password"
          v-model="credentials.password"
          class="input"
          type="password"
          :placeholder="$t('account.password')"
          @keyup="validatePassword()"
          @keyup.enter="register()"
        >
        <input
          id="confirmPassword"
          v-model="credentials.confirm"
          class="input"
          type="password"
          :placeholder="$t('account.confirmPassword')"
          @keyup.enter="register()"
        >
        <a class="button" @click="register()">
          <div v-if="loading" class="lds-ellipsis"><div /><div /><div /><div /></div>
          <fa-icon v-else class="icon" icon="sign-in-alt" />
          {{ $t("account.register") }}
        </a>
      </div>
      <p class="question">
        {{ $t('account.alreadyRegistered') }}
        <nuxt-link :to="localePath('/login')">
          {{ $t("account.login") }}
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import registerUser from '@/gql/auth/registerUser.gql'

export default {
  layout: 'empty',
  data () {
    return {
      text: null,
      passwordStrength: null,
      colorStrength: null,
      loading: false,
      credentials: {
        username: '',
        email: '',
        password: '',
        confirm: ''
      }
    }
  },
  methods: {
    async register () {
      const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ // eslint-disable-line

      if (this.credentials.username === '' && this.credentials.email === '' && this.credentials.password === '') {
        this.text = 'You have to provide your username, your e-mail address as well as your password!'
      } else if (this.credentials.email === '') {
        this.text = 'You have to provide your e-mail address!'
      } else if (this.credentials.password === '') {
        this.text = 'You have to provide your password!'
      } else if (this.credentials.confirm === '') {
        this.text = 'You have to confirm your password!'
      } else if (this.credentials.password.length > 256) {
        this.text = 'Your password should not exceed 256 characters!'
      } else if (this.credentials.password.length < 8) {
        this.text = 'Your password should contain atleast 8 characters!'
      } else if (this.credentials.username.length < 3) {
        this.text = 'Your username should contain atleast 3 characters!'
      } else if (this.credentials.username.length > 20) {
        this.text = 'Your username should not exceed 20 characters!'
      } else if (this.credentials.password !== this.credentials.confirm) {
        this.text = 'Your passwords do not equal each other!'
      } else if (!regex.test(String(this.credentials.email).toLowerCase())) {
        this.text = 'You have to provide a valid e-mail address!'
      } else {
        this.loading = true
        try {
          await this.$apollo.mutate({
            mutation: registerUser,
            variables: {
              username: this.credentials.username,
              email: this.credentials.email,
              password: this.credentials.password
            }
          })
          this.$router.push('/login?from=register')
        } catch (error) {
          console.error(error)
        }
      }
    },
    validatePassword () {
      const password = document.getElementById('password').value
      this.passwordStrength = this.checkPasswordStrength(password)
    },
    scorePassword (password) {
      let score = 0
      if (!password) { return score }

      const letters = {}
      for (let i = 0; i < password.length; i++) {
        letters[password[i]] = (letters[password[i]] || 0) + 1
        score += 5.0 / letters[password[i]]
      }

      const variations = {
        digits: /\d/.test(password),
        lower: /[a-z]/.test(password),
        upper: /[A-Z]/.test(password),
        nonWords: /\W/.test(password)
      }

      let variationCount = 0
      for (const check in variations) {
        variationCount += (variations[check] === true) ? 1 : 0
      }
      score += (variationCount - 1) * 10

      return parseInt(score)
    },
    checkPasswordStrength (password) {
      const score = this.scorePassword(password)
      if (score > 80) {
        return 'Your password is strong'
      } else if (score > 60) {
        return 'Your password is good'
      } else if (score >= 30) {
        return 'Your password is weak'
      } else {
        return 'Your password is very weak'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
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

      .strength {
        font-size: 14px;
        margin: 2px 0;
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

        .lds-ring {
          display: inline-block;
          position: relative;
          width: 18px;
          height: 18px;
        }

        .lds-ellipsis {
          display: inline-block;
          position: relative;
          width: 32px;
          height: 8px;
          margin-right: 8px;
        }

        .lds-ellipsis div {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--dark);
          animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }

        .lds-ellipsis div:nth-child(1) {
          left: 0;
          animation: lds-ellipsis1 0.6s infinite;
        }

        .lds-ellipsis div:nth-child(2) {
          left: 0;
          animation: lds-ellipsis2 0.6s infinite;
        }

        .lds-ellipsis div:nth-child(3) {
          left: 12px;
          animation: lds-ellipsis2 0.6s infinite;
        }

        .lds-ellipsis div:nth-child(4) {
          left: 24px;
          animation: lds-ellipsis3 0.6s infinite;
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
  .register {
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

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(12px, 0);
  }
}
</style>
