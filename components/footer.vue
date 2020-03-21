<template>
  <div class="footer">
    <div class="left">
      <nuxt-link to="/imprint">
        Imprint
      </nuxt-link>
    </div>
    <div class="right">
      <nuxt-link to="/tos">
        Terms
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;

  .left {
    display: flex;
    flex-direction: row;
  }

  .right {
    display: flex;
    flex-direction: row;
  }
}
</style>
