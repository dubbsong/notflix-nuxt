<template>
  <div id="movies">
    <!-- Billboard -->
    <section class="section">
      <h3>Movies</h3>
    </section>

    <!-- Popular -->
    <section class="section">
      <!-- title -->
      <h4>Popular</h4>

      <!-- slider -->

      <!-- data -->
      <b-collapse :open="false">
        <b-button slot="trigger" class="button is-light">
          Data
        </b-button>

        <div class="content">
          <p>{{ popularData }}</p>
        </div>
      </b-collapse>
    </section>

    <!-- Now Playing -->
    <section class="section">
      <!-- title -->
      <h4>Now Playing</h4>

      <!-- slider -->

      <!-- data -->
      <b-collapse :open="false">
        <b-button slot="trigger" class="button is-light">
          Data
        </b-button>

        <div class="content">
          <p>{{ nowPlayingData }}</p>
        </div>
      </b-collapse>
    </section>

    <!-- Top Rated -->
    <section class="section">
      <!-- title -->
      <h4>Top Rated</h4>

      <!-- slider -->

      <!-- data -->
      <b-collapse :open="false">
        <b-button slot="trigger" class="button is-light">
          Data
        </b-button>

        <div class="content">
          <p>{{ topRatedData }}</p>
        </div>
      </b-collapse>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    popularData: [],
    nowPlayingData: [],
    topRatedData: [],
  }),
  mounted() {
    this.getPopularData()
    this.getNowPlayingData()
    this.getTopRatedData()
  },
  methods: {
    // Popular Data
    getPopularData() {
      const params = [
        'api_key=b1aff257ceb0cbcdd236cef217694a61',
        'language=en-US',
      ].join('&')

      axios
        .get(`https://api.themoviedb.org/3/movie/popular?${params}`)
        .then(({ data }) => {
          this.popularData = data.results
        })
        .catch((error) => {
          this.popularData = []
          throw error
        })
    },
    // Now Playing Data
    getNowPlayingData() {
      const params = [
        'api_key=b1aff257ceb0cbcdd236cef217694a61',
        'language=en-US',
      ].join('&')

      axios
        .get(`https://api.themoviedb.org/3/movie/now_playing?${params}`)
        .then(({ data }) => {
          this.nowPlayingData = data.results
        })
        .catch((error) => {
          this.nowPlayingData = []
          throw error
        })
    },
    // Top Rated Data
    getTopRatedData() {
      const params = [
        'api_key=b1aff257ceb0cbcdd236cef217694a61',
        'language=en-US',
      ].join('&')

      axios
        .get(`https://api.themoviedb.org/3/movie/top_rated?${params}`)
        .then(({ data }) => {
          this.topRatedData = data.results
        })
        .catch((error) => {
          this.topRatedData = []
          throw error
        })
    },
  },
  head: () => ({
    title: 'Notflix Movies',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Notflix Movies',
      },
    ],
  }),
}
</script>
