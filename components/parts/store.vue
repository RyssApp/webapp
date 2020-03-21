<template>
  <div class="store">
    <div class="logo">
      <img class="source" :src="logoUrl">
    </div>
    <div class="content">
      <h2 class="name">
        {{ displayName }}
      </h2>
      <p class="location">
        {{ location }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logoUrl: {
      type: String,
      default: '/img/defaultStore.svg'
    },
    displayName: {
      type: String,
      required: true,
      default: 'N/A'
    },
    location: {
      type: String,
      required: true,
      default: 'N/A'
    }
  }
}
</script>

<style lang="scss" scoped>
.store {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--lighter);
  border: solid 1px var(--light);
  padding: 16px;
  margin: 0 0 25px 0;
  border-radius: 16px;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-bottom);
  }

  &:last-child {
    margin: 0;
  }

  .logo {
    margin-right: 12px;
    .source {
      height: 48px;
      width: auto;
    }
  }

  .content {
    display: flex;
    flex-direction: column;

    .name {
      font-size: 20px;
    }

    .location {
      font-size: 14px;
      margin-top: 2px;
    }
  }
}

@media only screen and (max-width: 1000px) {
  .store {
    padding: 16px;
    margin: 0 0 25px 0;
    border-radius: 16px;

    .logo {

      .source {
        height: 32px;
      }
    }

    .content {

      .name {
        font-size: 16px;
      }

      .location {
        font-size: 12px;
      }
    }
  }
}
</style>
