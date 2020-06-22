<template>
  <div id="app">
    <!-- Header -->
    <Header />

    <!-- Main -->
    <div id="main" role="main">
      <nuxt />
    </div>

    <!-- Footer -->

    <!-- NavMobile -->
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header,
  },
}
</script>

<style lang="scss">
#app {
  #main {
    min-height: calc(100vh - 140px);
    background-color: #141414;
    color: #fff;
    margin-top: 68px;
  }
}

@media (max-width: 768px) {
  #app {
    #main {
      padding-bottom: 72px;
    }
  }
}
</style>
