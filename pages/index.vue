<template>
  <div class="index">
    <div class="wrapper">
      <div class="logo">
        <img class="source" src="/img/logo.svg" draggable="false" alt="Ryss logo">
      </div>
      <div class="controls">
        <div class="search">
          <input
            id="bar"
            class="bar"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search ..."
            @input="completeSearch()"
            @keyup.enter="searchProducts()"
          >
          <a class="submit" @click="searchProducts()">
            <svg class="magnifier" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="path" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
          </a>
        </div>
      </div>
      <p class="text">
        {{ $t('mainPage.searchInfo') }}
        <nuxt-link to="/about">
          {{ $t('mainPage.aboutUs') }}
        </nuxt-link>
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
  },
  methods: {
    completeSearch (query) {

    },
    searchProducts (query) {
      const input = document.getElementById('bar')

      if (input.value !== '') {
        this.$router.push(`/search?query=${encodeURIComponent(input.value)}`)
      }
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
        position: relative;

        .bar {
          font-size: 16px;
          border-radius: 48px;
          border: 1px solid var(--light);
          padding: 16px 22px;
          width: 580px;
          outline: none;
          transition: var(--transition);
          font-family: var(--font);

          &:focus, &:active {
            border: 1px solid var(--light-dark);
            box-shadow: var(--shadow-all);
          }
        }

        .submit {
          height: 52px;
          width: 52px;
          position: absolute;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 8px;
          cursor: pointer;

          .magnifier {
            height: 32px;
            width: 32px;

            .path {
              fill: var(--primary-dark);
            }
          }
        }
      }

      .buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 25px;

        .button {
          border-radius: 8px;
          border: solid 1px var(--light-dark);
          background: var(--lighter);
          color: var(--dark-light);
          padding: 14px;
          font-size: 18px;
          font-family: var(--font);
          cursor: pointer;
          box-shadow: var(--shadow-bottom);
          margin: 0 16px;
          width: 140px;
          text-align: center;
          user-select: none;

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

    .text {
      text-align: center;
      margin-top: 18px;
    }
  }
}

@media only screen and (max-width: 750px) {
  .index {

    .wrapper {
      width: 100%;

      .controls {
        width: 100%;

        .search {
          width: 100%;

          .bar {
            font-size: 16px;
            border-radius: 48px;
            border: 1px solid var(--light);
            padding: 16px 22px;
            width: 100%;
            margin: 0 25px;
            outline: none;
            transition: var(--transition);

            &:focus, &:active {
              border: 1px solid var(--light-dark);
              box-shadow: var(--shadow-all);
            }
          }

          .submit {
            right: 25px;
          }
        }
      }
    }
  }
}
</style>
