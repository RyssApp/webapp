<template>
  <div class="products">
    <div id="storeResultsBackdrop" class="backdrop" />
    <div class="wrapper">
      <div class="close">
        <fa-icon class="icon" icon="times" />
      </div>
      <div class="info">
        <div class="image">
          <img class="source" :src="logoUrl">
        </div>
        <div class="content">
          <h2 class="title">
            {{ displayName }}
          </h2>
          <p class="address">
            {{ address }}
          </p>
        </div>
      </div>
      <div class="seperator" />
      <div class="result">
        <h3 class="name">
          Alnatura Bio Schokolade Vollmilch
        </h3>
        <p class="quantity">
          Available: Many
        </p>
      </div>
      <div class="seperator" />
      <div class="list">
        <div class="product">
          <div class="content">
            Alnatura Bio Eier
          </div>
          <div class="controls">
            <a class="button">
              <fa-icon class="icon enough" icon="check-circle" />
            </a>
            <a class="button">
              <fa-icon class="icon decent" icon="check-circle" />
            </a>
            <a class="button">
              <fa-icon class="icon nothing" icon="times-circle" />
            </a>
          </div>
        </div>
      </div>
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
    address: {
      type: String,
      required: true,
      default: 'N/A'
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999999999999999999999;

  .backdrop {
    position: absolute;
    background: var(--dark);
    opacity: 0.5;
    height: 100%;
    width: 100%;
  }

  .wrapper {
    position: absolute;
    background: var(--white);
    box-shadow: var(--shadow-all);
    right: 0;
    top: 0;
    height: 100%;
    min-width: 540px;

    .close {
      position: absolute;
      top: 24px;
      right: 24px;
      cursor: pointer;

      .icon {
        width: 32px;
        height: auto;
        color: var(--dark);
      }
    }

    .seperator {
      height: 1px;
      width: 100%;
      position: relative;
      background: var(--light);
    }

    .info {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 32px;

      .image {
        margin-right: 16px;

        .source {
          height: 40px;
        }
      }

      .content {
        display: flex;
        flex-direction: column;

        .title {
          font-weight: 700;
          font-size: 24px;
          color: var(--dark);
        }

        .address {
          font-size: 14px;
          color: var(--dark);
        }
      }
    }

    .result {
      margin: 32px;

      .name {
        font-size: 18px;
        color: var(--dark);
      }

      .quantity {
        font-size: 14px;
        color: var(--primary);
        margin-top: 4px;
      }
    }

    .list {
      margin: 32px;

      .product {

        .content {
          font-size: 18px;
          color: var(--dark);
        }

        .controls {
          display: flex;
          flex-direction: row;
          margin-top: 8px;

          .button {
            margin-right: 8px;

            .icon {
              font-size: 48px;
              cursor: pointer;
              transition: var(--transition);

              &:hover {
                opacity: .85;
              }
            }

            .enough {
              color: var(--primary-dark)
            }

            .decent {
              color: var(--orange);
            }

            .nothing {
              color: var(--red);
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 720px) {
  .products {

    .wrapper {
      position: absolute;
      background: var(--white);
      box-shadow: var(--shadow-all);
      right: 0;
      top: 0;
      height: 100%;
      min-width: 320px;

      .info {
        margin: 24px;
      }
    }
  }
}
</style>
