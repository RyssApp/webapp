<template>
  <div class="search">
    <div class="wrapper">
      <div class="list">
        <store
          v-for="store in stores"
          :key="store.id"
          :display-name="store.displayName"
          :location="store.address"
          :logo-url="store.logo"
          @click.native="centerMap(store.id)"
        />
      </div>
      <div class="map">
        <client-only>
          <l-map v-if="currentPosition.length !== 0" :zoom="13" :center="currentPosition">
            <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            <l-marker v-for="store in stores" :key="store.id" :lat-lng="[store.latitude, store.longitude]" :name="store.displayName">
              <l-tooltip>{{ store.displayName }}</l-tooltip>
            </l-marker>
          </l-map>
          <div v-else class="loading">
            <p>{{ $t("general.loading") }}</p>
          </div>
        </client-only>
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
      query: this.getQuery(),
      currentPosition: [],
      yourLocation: [],
      stores: [
        {
          id: '1',
          latitude: '48.664663',
          longitude: '11.711396',
          displayName: 'Netto GmbH',
          logoUrl: '/img/defaultStore.svg',
          address: '82131 Gauting Ammerseestraße 117'
        },
        {
          id: '2',
          latitude: '48.657071',
          longitude: '11.682181',
          displayName: 'dm-drogerie markt',
          logoUrl: '/img/defaultStore.svg',
          address: '82131 Gauting Ammerseestraße 117'
        },
        {
          id: '3',
          latitude: '48.673400',
          longitude: '11.679354',
          displayName: 'REWE',
          logoUrl: '/img/defaultStore.svg',
          address: '82131 Gauting Ammerseestraße 117'
        },
        {
          id: '4',
          latitude: '48.692282',
          longitude: '11.704026',
          displayName: 'Edeka',
          logoUrl: '/img/defaultStore.svg',
          address: '82131 Gauting Ammerseestraße 117'
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$router.afterEach((to, from) => {
        this.changeQuery(to.query.query)
      })
      navigator.geolocation.getCurrentPosition((location) => {
        this.currentPosition = [location.coords.latitude, location.coords.longitude]
      })
    })
  },
  methods: {
    centerMap (id) {
      const store = this.stores.find(store => store.id === id)
      this.currentPosition = [store.latitude, store.longitude]
    },
    getQuery () {
      return this.$route.query.query
    },
    changeQuery (query) {
      // reload results
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
