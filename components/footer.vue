<template>
  <div class="footer">
    <div class="links">
      <nuxt-link class="link" to="/imprint">
        {{ $t("general.imprint") }}
      </nuxt-link>
      <nuxt-link class="link" to="/tos">
        {{ $t("general.terms") }}
      </nuxt-link>
    </div>
    <div class="controls">
      <a class="list floating">
        <fa-icon class="icon" icon="pen" />
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

      .icon {
        color: var(--white);
      }
    }
  }
}
</style>
