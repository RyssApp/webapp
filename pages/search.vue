<template>
  <div class="search">
    <div class="wrapper">
      <div class="list">
        <store v-for="i in 5" :key="i" display-name="Netto Markt GmbH" location="Gauting 82131 Ammerseestraße 116" />
      </div>
      <div class="map">
        <iframe class="embed" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6340.982449951475!2d11.355455751553414!3d48.070586958633825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dd0cd7626bd4d%3A0x32b0fe8913926e8b!2s82131%20Gauting!5e0!3m2!1sen!2sde!4v1584786186688!5m2!1sen!2sde" frameborder="0" aria-hidden="false" tabindex="0" />
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/components/parts/store'

export default {
  layout: 'results',
  components: {
    store
  },
  data () {
    return {
      hallo: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;

  .wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;

    .list {
      display: flex;
      flex-direction: column;
      padding: 25px;
      width: 450px;
    }

    .map {
      flex: 1;

      .embed {
        height: 100%;
        width: 100%;
      }
    }
  }
}

@media only screen and (max-width: 1000px) {
  .search {

    .wrapper {

      .list {
        width: 350px;
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .search {

    .wrapper {

      .map {
        display: none;
      }

      .list {
        width: 100%;
      }
    }
  }
}
</style>
