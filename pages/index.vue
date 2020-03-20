<template>
  <div class="index">
    <div class="wrapper">
      <div class="logo">
        <img class="source" src="/img/logo.svg" alt="Ryss logo">
      </div>
      <div class="controls">
        <div class="search">
          <input class="bar" type="text">
        </div>
        <div class="buttons">
          <a class="button">Search</a>
        </div>
      </div>
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
.index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .logo {
      display: flex;
      flex-direction: row;
      justify-content: center;

      .source {
        height: 150px;
        width: auto;
      }
    }

    .controls {
      display: flex;
      flex-direction: column;
      margin-top: 50px;

      .search {
        display: flex;
        flex-direction: row;
        justify-content: center;

        .bar {
          font-size: 16px;
          border-radius: 48px;
          border: 1px solid var(--light);
          padding: 16px 22px;
          width: 450px;
          outline: none;
        }
      }

      .buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 25px;

        .button {
          border-radius: 8px;
          border: var(--light);
          background: var(--lighter);
          color: var(--darker);
          padding: 12px 16px;
          font-size: 22px;
          font-family: var(--font-regular);
          cursor: pointer;
          box-shadow: var(--shadow-bottom);

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
  }
}
</style>
