<template>
  <div class="navbar">
    <div class="links">
      <a class="title" href="https://ryss.app">Ryss</a>
    </div>
    <profile v-if="isLoggedIn" />
    <div v-else class="login">
      <nuxt-link to="/login" class="button">
        Login
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;

  .links {
    display: flex;
    flex-direction: row;

    .title {
      font-family: var(--font);
      font-weight: 700;
      font-size: 32px;
      letter-spacing: .8px;
    }
  }

  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;

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
