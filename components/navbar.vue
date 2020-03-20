<template>
  <div class="navbar">
    <div class="links">
      <a href="https://ryss.app">Ryss Lol</a>
    </div>
    <div class="user">
      <div class="avatar">
        <p>Rxsto</p>
        <img src="/static/img/rxsto.png">
      </div>
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
  }

  .user {
    display: flex;
    flex-direction: row;

    .avatar {

    }
  }
}
</style>
