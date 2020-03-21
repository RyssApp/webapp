<template>
  <div class="navbar">
    <div class="top">
      <nuxt-link to="/" class="title">
        Ryss
      </nuxt-link>
    </div>
    <profile v-if="isLoggedIn" />
    <div v-else class="login">
      <nuxt-link to="/login" class="button">
        <fa-icon class="icon" icon="sign-in-alt" />
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
