<template>
  <div class="footer">
    <div class="links">
      <nuxt-link class="link" to="/imprint">
        Imprint
      </nuxt-link>
      <nuxt-link class="link" to="/tos">
        Terms
      </nuxt-link>
    </div>
    <div class="controls">
      <a class="list floating">
        <fa-icon class="icon" icon="pen" />
        <p class="tooltip">Coming soon!</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 16px;

  .links {
    display: flex;
    flex-direction: row;

    .link {
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .controls {
    display: flex;
    flex-direction: row;

    .floating {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 50px;
      border-radius: 100%;
      background: var(--primary-dark);
      box-shadow: var(--shadow-bottom);
      cursor: pointer;
      position: relative;

      &:hover {

        .tooltip {
          display: flex;
        }
      }

      .icon {
        color: var(--white);
      }

      .tooltip {
        display: none;
        position: absolute;
        padding: 12px;
        border-radius: 8px;
        background: var(--darker);
        box-shadow: var(--shadow-bottom);
        bottom: 0;
        right: 0;
        transform: translateX(-64px);
        color: var(--white);
      }
    }
  }
}
</style>
