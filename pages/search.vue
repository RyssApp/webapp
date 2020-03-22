<template>
  <div class="search">
    <products
      v-if="activeSelection"
      :key="currentStore.id"
      :display-name="currentStore.display_name"
      :address="getAddress(currentStore.location)"
      :logo-url="currentStore.logo_url"
    />
    <div class="wrapper">
      <div class="list">
        <store
          v-for="store in stores"
          :key="store.id"
          :display-name="store.display_name"
          :location="getAddress(store.location)"
          :logo-url="store.logo_url"
          @click.native="selectStore(store.id)"
        />
        <p v-if="noResults" class="nothing">
          No results found!
        </p>
      </div>
      <div class="map">
        <client-only>
          <div v-if="loading" class="loading">
            <div class="lds-ellipsis">
              <div /><div /><div /><div />
            </div>
          </div>
          <l-map v-else :zoom="13" :center="currentPosition">
            <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            <l-marker v-for="store in stores" :key="store.id" :lat-lng="[store.location._geoloc.lat, store.location._geoloc.lng]" :name="store.display_name">
              <l-tooltip>{{ store.display_name }}</l-tooltip>
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
import algoliasearch from 'algoliasearch/lite'
import store from '@/components/parts/store'
import products from '@/components/results/products'

const client = algoliasearch('XBLVADGQHF', '420c57a6616c385e11bbc7f599a3795a')
const storeIndex = client.initIndex('stores')

export default {
  layout: 'results',
  components: {
    store,
    products
  },
  data () {
    return {
      query: this.getQuery(),
      activeSelection: false,
      currentPosition: [],
      currentStore: {
        id: 0,
        displayName: 'N/A',
        logoUrl: '/img/defaultStore.svg',
        location: 'N/A'
      },
      loading: true,
      noResults: false,
      yourLocation: [],
      stores: []
    }
  },
  mounted () {
    this.$nextTick(async () => {
      const result = await storeIndex.search(this.query)
      this.stores = result.hits
      this.stores.length === 0 ? this.noResults = true : this.noResults = false
      this.$router.afterEach((to, from) => {
        this.changeQuery(to.query.query)
      })
      navigator.geolocation.getCurrentPosition((location) => {
        this.currentPosition = [location.coords.latitude, location.coords.longitude]
        this.loading = false
      })

      document.addEventListener('click', (event) => {
        if (event.target === document.getElementById('storeResultsBackdrop')) {
          this.activeSelection = false
        }
      })
    })
  },
  methods: {
    selectStore (id) {
      const store = this.stores.find(store => store.id === id)
      this.currentStore = store
      this.activeSelection = true
      this.currentPosition = [store.location._geoloc.lat, store.location._geoloc.lng]
    },
    getQuery () {
      return this.$route.query.query
    },
    getAddress (location) {
      return `${location.city} ${location.zip_code} ${location.address}`
    },
    async changeQuery (query) {
      this.query = query
      const result = await storeIndex.search(query)
      this.stores = result.hits
      this.stores.length === 0 ? this.noResults = true : this.noResults = false
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

      .nothing {
        text-align: center;
        font-size: 24px;
        color: var(--dark);
      }
    }

    .map {
      flex: 1;
      background: var(--light);

      .embed {
        height: 100%;
        width: 100%;
      }
    }

    .loading {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 100%;

      .lds-ring {
        display: inline-block;
        position: relative;
        width: 18px;
        height: 18px;
      }

      .lds-ellipsis {
        display: inline-block;
        position: relative;
        width: 32px;
        height: 8px;
        margin-right: 8px;
      }

      .lds-ellipsis div {
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--dark);
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
      }

      .lds-ellipsis div:nth-child(1) {
        left: 0;
        animation: lds-ellipsis1 0.6s infinite;
      }

      .lds-ellipsis div:nth-child(2) {
        left: 0;
        animation: lds-ellipsis2 0.6s infinite;
      }

      .lds-ellipsis div:nth-child(3) {
        left: 12px;
        animation: lds-ellipsis2 0.6s infinite;
      }

      .lds-ellipsis div:nth-child(4) {
        left: 24px;
        animation: lds-ellipsis3 0.6s infinite;
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

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(12px, 0);
  }
}
</style>
