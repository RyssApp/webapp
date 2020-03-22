<template>
  <div class="profile">
    <a class="button" @click="logout()">
      <fa-icon class="icon" icon="sign-out-alt" />
      <p class="content">Logout</p>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: row;
  align-items: center;

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

@media only screen and (max-width: 400px) {
  .profile {

    .button {
      padding: 12px 10px 12px 14px;

      .content {
        display: none;
      }

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
</style>
