<template>
  <div class="error">
    <p class="code">
      {{ code }}
    </p>
    <h1 class="title">
      Whoopsie!
    </h1>
    <p class="description">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    code () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message || '<%= messages.client_error %>'
    }
  },
  head () {
    return {
      title: this.code
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .code {
    font-size: 125px;
    font-weight: 700;
    opacity: .75;
  }
  .title {
    font-size: 75px;
  }
  .description {
    font-size: 25px;
    opacity: .75;
    margin-top: 5px;
  }
}
@media only screen and (max-width: 800px) {
  .error {
  padding: 25px;
    .code {
      font-size: 75px;
    }
    .title {
      font-size: 50px;
    }
    .description {
      font-size: 15px;
    }
  }
}
</style>
