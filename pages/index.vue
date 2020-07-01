<template>
  <div id="home">
    <!-- Billboard -->
    <section class="section">
      <h3>Home</h3>
    </section>

    <!-- My List -->
    <section v-show="$store.state.checkJwt" class="section">
      <!-- title -->
      <h4>My List</h4>

      <!-- data -->
      <b-collapse :open="false">
        <b-button slot="trigger" class="button is-light">
          Data
        </b-button>

        <div class="content">
          <p>{{}}</p>
        </div>
      </b-collapse>
    </section>

    <!-- Trending Now (Movies) -->
    <section class="section">
      <!-- title -->
      <h4>Trending Now Movies</h4>

      <!-- data -->
      <b-collapse :open="false">
        <b-button slot="trigger" class="button is-light">
          Data
        </b-button>

        <div class="content">
          <p>{{ trendingMovies }}</p>
        </div>
      </b-collapse>
    </section>

    <!-- Trending Now (TV Shows) -->
    <section class="section">
      <!-- title -->
      <h4>Trending Now TV Shows</h4>

      <!-- data -->
      <b-collapse :open="false">
        <b-button slot="trigger" class="button is-light">
          Data
        </b-button>

        <div class="content">
          <p>{{ trendingTVShows }}</p>
        </div>
      </b-collapse>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    trendingMovies: [],
    trendingTVShows: [],
  }),
  mounted() {
    this.getTrendingMovies()
    this.getTrendingTVShows()
  },
  methods: {
    // Trending Movies
    getTrendingMovies() {
      const params = [
        'api_key=b1aff257ceb0cbcdd236cef217694a61',
        'language=en-US',
      ].join('&')

      axios
        .get(`https://api.themoviedb.org/3/trending/movie/week?${params}`)
        .then(({ data }) => {
          this.trendingMovies = data.results
        })
        .catch((error) => {
          this.trendingMovies = []
          throw error
        })
    },
    // Trending TV Shows
    getTrendingTVShows() {
      const params = [
        'api_key=b1aff257ceb0cbcdd236cef217694a61',
        'language=en-US',
      ].join('&')

      axios
        .get(`https://api.themoviedb.org/3/trending/tv/week?${params}`)
        .then(({ data }) => {
          this.trendingTVShows = data.results
        })
        .catch((error) => {
          this.trendingTVShows = []
          throw error
        })
    },
  },
  head: () => ({
    title: 'Notflix Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Notflix Home',
      },
    ],
  }),
}
</script>
