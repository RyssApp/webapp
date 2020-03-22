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
      <p v-if="fromRegister" class="email">
        {{ $t('eMailVerification') }}
      </p>
      <p class="text">
        {{ $t(text) }}
      </p>
      <div class="controls">
        <input
          v-model="credentials.login"
          class="input"
          type="text"
          :placeholder="$t('account.eMail')"
          autocomplete="off"
          @keyup.enter="login()"
        >
        <input v-model="credentials.password" class="input" type="password" placeholder="Password" @keyup.enter="login()">
        <a class="button" @click="login()">
          <div v-if="loading" class="lds-ellipsis"><div /><div /><div /><div /></div>
          <fa-icon v-else class="icon" icon="sign-in-alt" 
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
import loginUser from '@/gql/auth/loginUser.gql'

export default {
  layout: 'empty',
  data () {
    return {
      text: null,
      fromRegister: false,
      loading: false,
      credentials: {
        login: '',
        password: ''
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      // this.$route.query.from === 'register' ? this.fromRegister = true : this.fromRegister = false
    })
  },
  methods: {
    async login () {
      const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ // eslint-disable-line

      if (this.credentials.login === '' && this.credentials.password === '') {
        this.text = 'account.loginPage.noInput'
      } else if (this.credentials.login === '') {
        this.text = 'account.registration.noEmail'
      } else if (this.credentials.password === '') {
        this.text = 'account.registration.noPassword'
      // } else if (!regex.test(String(this.credentials.login).toLowerCase()))
      // {
      // this.text = 'account.registration.provideValidEmail'
      } else {
        this.loading = true
        try {
          const result = await this.$apollo.mutate({
            mutation: loginUser,
            variables: {
              login: this.credentials.login,
              password: this.credentials.password
            }
          })
          const data = result.data
          this.$store.commit('auth/setUser', data.login.user)
          this.$auth.login(data.login.token)
          this.$router.push('/')
        } catch (error) {
          console.error(error)
        }
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

    .email {
      font-size: 16px;
      margin-bottom: 8px;
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
