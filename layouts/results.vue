<template>
  <div id="__content">
    <navbar />
    <nuxt id="__render" />
  </div>
</template>

<script>
import navbar from '@/components/results/navbar'

export default {
  components: {
    navbar
  }
}
</script>

<style lang="scss" scoped>
#__content {
  display: flex;
  flex-direction: column;

  .navbar {

  }

  #__render {
    flex: 1;
  }

  .footer {

  }
}
</style>
