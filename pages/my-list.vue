<template>
  <div id="my-list">
    <!-- Billboard -->
    <section class="section">
      <h3>My List</h3>
    </section>

    <!-- Table -->
    <section class="section">
      <h4>Table</h4>
    </section>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  head: () => ({
    title: 'Notflix My List',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Notflix My List',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
#my-list {
  padding-top: 100px;
}
</style>
