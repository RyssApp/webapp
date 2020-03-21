<template>
  <div class="profile">
    <div class="avatar">
      <img class="source" src="/img/rxsto.png">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.profile {

  .user {
    display: flex;
    flex-direction: row;

    .avatar {
      width: 50px;
      height: auto;

      .source {
        width: 50px;
        height: auto;
        border-radius: 100%;
      }
    }
  }
}
</style>
