<template>
  <div id="loading">
    <b-loading
      v-if="isLoading"
      :active.sync="isLoading"
      :can-cancel="true"
    ></b-loading>
  </div>
</template>

<script>
export default {
  data: () => ({
    isLoading: false,
  }),
  methods: {
    start() {
      this.isLoading = true
    },
    finish() {
      this.isLoading = false
    },
  },
}
</script>
