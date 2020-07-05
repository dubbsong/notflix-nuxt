<template>
  <div id="about">
    <!-- Page title -->
    <section class="section">
      <h3>About</h3>
    </section>

    <!-- About -->
    <section class="section">
      <!-- info -->
      <h4>오많배</h4>
    </section>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: 'Notflix About',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Notflix About',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
#about {
  padding-top: 100px;
}
</style>
