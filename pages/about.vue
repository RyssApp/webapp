<template>
  <div class="about">
    <div class="wrapper">
      <p class="title">
        {{ $t("about.wip") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hallo: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.about {

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;

    .title {
      font-size: 24px;
    }
  }
}
</style>
