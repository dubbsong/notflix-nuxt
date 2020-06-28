<template>
  <nav>
    <!-- Home -->
    <div class="item">
      <nuxt-link to="/">
        <b-icon icon="home" />
        <p>Home</p>
      </nuxt-link>
    </div>

    <!-- Movies -->
    <div class="item">
      <nuxt-link to="/movies">
        <b-icon icon="movie-open" />
        <p>Movies</p>
      </nuxt-link>
    </div>

    <!-- TV Shows -->
    <div class="item">
      <nuxt-link to="/tv">
        <b-icon icon="television-classic" />
        <p>TV Shows</p>
      </nuxt-link>
    </div>

    <!-- My List -->
    <div class="item">
      <nuxt-link to="/my-list">
        <b-icon icon="view-list" />
        <p>My List</p>
      </nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: #141414;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
  z-index: 100;

  .item {
    text-align: center;

    a {
      color: #b3b3b3;
      transition: all 0.2s ease-in-out;

      &.nuxt-link-exact-active {
        color: #fff;
      }
    }
  }
}
</style>
