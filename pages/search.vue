<template>
  <div id="search">
    <!-- Search -->
    <section class="section">
      <div class="container">
        <h3>Search</h3>

        <b-field>
          <b-input
            v-model="searchWord"
            type="search"
            icon="magnify"
            placeholder="Search Movie or TV show"
            icon-clickable
            @icon-click="handleSearch"
            @keyup.native.enter="handleSearch"
          ></b-input>
        </b-field>
      </div>
    </section>

    <!-- Result -->
    <section class="section">
      <div class="container">
        <p>
          Related to: <b>{{ related }}</b>
        </p>
      </div>
    </section>

    <!-- alertModal -->
    <AlertModal
      :modal="alertModal"
      :title="alertModalTitle"
      @close="alertModal = false"
    />
  </div>
</template>

<script>
import AlertModal from '~/components/AlertModal'

export default {
  components: {
    AlertModal,
  },
  data: () => ({
    searchWord: '',
    related: '',
    alertModal: false,
    alertModalTitle: '',
  }),
  methods: {
    handleSearch() {
      if (this.searchWord === '') {
        this.alertModal = true
        this.alertModalTitle = 'Please enter Movie or TV show'
        return
      }

      this.related = this.searchWord
      this.searchWord = ''
    },
  },
}
</script>

<style lang="scss" scoped>
#search {
  section {
    .container {
      h3 {
        margin-bottom: 16px;
      }
    }
  }
}
</style>
