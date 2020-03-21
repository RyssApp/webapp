<template>
  <div class="footer">
    <div class="links">
      <nuxt-link class="link" to="/imprint">
        Imprint
      </nuxt-link>
      <nuxt-link class="link" to="/tos">
        Terms
      </nuxt-link>
    </div>
    <div class="controls">
      <a class="list floating">
        P
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;

  .links {
    display: flex;
    flex-direction: row;

    .link {
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .right {
    display: flex;
    flex-direction: row;
  }
}
</style>
