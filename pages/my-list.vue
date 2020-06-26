<template>
  <div id="my-list">
    <!-- Title -->
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
}
</script>
