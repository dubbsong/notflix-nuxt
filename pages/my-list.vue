<template>
  <div id="my-list">
    <!-- Title -->
    <section class="section">
      <div class="container">
        <h3>My List</h3>
      </div>
    </section>

    <!-- Table -->
    <section class="section">
      <div class="container">
        <h4>Table</h4>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>
