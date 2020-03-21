<template>
  <div id="__content">
    <nuxt id="__render" />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#__content {
  display: flex;
  flex-direction: column;

  #__render {
    flex: 1;
  }
}
</style>
