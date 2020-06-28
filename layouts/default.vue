<template>
  <div id="app">
    <!-- Header -->
    <Header />

    <!-- Main -->
    <div id="main" role="main">
      <nuxt />
    </div>

    <!-- Footer -->
    <Footer class="is-hidden-mobile" />

    <!-- NavMobile -->
    <NavMobile class="is-hidden-tablet" />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import NavMobile from '~/components/NavMobile'

export default {
  components: {
    Header,
    Footer,
    NavMobile,
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
