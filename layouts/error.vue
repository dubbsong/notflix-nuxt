<template>
  <div id="not-found">
    <div>
      <h1>404 Not Found</h1>
      <h4>{{ $t('ERROR.SUBTITLE') }}</h4>

      <nuxt-link to="/">
        <b-icon icon="home" />
        Home
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 140px);

  div {
    text-align: center;

    h1 {
      line-height: 56px;
    }

    h4 {
      margin-bottom: 24px;
    }

    a {
      color: #b3b3b3;

      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
