<template>
  <div class="login">
    <div class="wrapper">
      <nuxt-link to="/" class="logo">
        <img class="source" src="/img/logo.svg">
      </nuxt-link>
      <h2 class="title">
        Login
      </h2>
      <p class="text">
        {{ text }}
      </p>
      <div class="controls">
        <input class="input" type="text" placeholder="E-Mail">
        <input class="input" type="password" placeholder="Password">
        <a class="button" @click="login()">Login</a>
      </div>
      <p class="question">
        No account yet?
        <nuxt-link to="/register">
          Register
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

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--light);
    border: solid 1px var(--light-dark);
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
        border: 1px solid var(--light-dark);
        padding: 12px 18px;
        width: 240px;
        outline: none;
        transition: var(--transition);
        margin: 4px 0;

        &:focus, &:active {
          box-shadow: var(--shadow-all);
        }
      }

      .button {
        border-radius: 8px;
        border: solid 1px var(--light-dark);
        background: var(--lighter);
        color: var(--darker);
        font-size: 18px;
        font-family: var(--font);
        cursor: pointer;
        box-shadow: var(--shadow-bottom);
        padding: 10px 18px;
        margin-top: 8px;
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

    .question {
      margin-top: 12px;
    }
  }
}
</style>
