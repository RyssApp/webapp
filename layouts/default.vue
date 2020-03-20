<template>
  <div id="__content">
    <navbar />
    <nuxt id="__render" />
    <foot />
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import footer from '@/components/footer'

export default {
  components: {
    navbar,
    foot: footer
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
