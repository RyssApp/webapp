<template>
  <div class="register">
    <div class="top">
      <nuxt-link to="/" class="title">
        Ryss
      </nuxt-link>
    </div>
    <div class="wrapper">
      <nuxt-link to="/" class="logo">
        <img class="source" src="/img/logo.svg">
      </nuxt-link>
      <h2 class="title">
        Register
      </h2>
      <p v-if="text" class="text">
        {{ text }}
      </p>
      <div class="controls">
        <input id="username" class="input" type="text" placeholder="Username" autocomplete="off">
        <input id="email" class="input" type="text" placeholder="E-Mail" autocomplete="off">
        <input id="password" class="input" type="password" placeholder="Password">
        <input id="confirmPassword" class="input" type="password" placeholder="Confirm Password">
        <a class="button" @click="register()">
          <fa-icon class="icon" icon="sign-in-alt" />
          Register
        </a>
      </div>
      <p class="question">
        Already registered?
        <nuxt-link to="/login">
          Login
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
    register () {
      const username = document.getElementById('username')
      const email = document.getElementById('email')
      const password = document.getElementById('password')
      const confirm = document.getElementById('confirmPassword')

      const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ // eslint-disable-line

      if (username.value === '' && email.value === '' && password.value === '') {
        this.text = 'You have to provide your e-mail address as well as your password!'
      } else if (email.value === '') {
        this.text = 'You have to provide your e-mail address!'
      } else if (password.value === '') {
        this.text = 'You have to provide your password!'
      } else if (confirm.value === '') {
        this.text = 'You have to confirm your password!'
      } else if (username.value.length < 5) {
        this.text = 'Your username should contain atleast 5 characters!'
      } else if (username.value.length > 32) {
        this.text = 'Your username should not exceed 32 characters!'
      } else if (password.value !== confirm.value) {
        this.text = 'Your passwords do not equal each other!'
      } else if (!regex.test(String(email.value).toLowerCase())) {
        this.text = 'You have to provide a valid e-mail address!'
      } else {
        this.text = null
      }
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
      if (score > 80) { return 'Your password is strong' }
      if (score > 60) { return 'Your password is good' }
      if (score >= 30) { return 'Your password is weak' }

      return ''
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
</style>
