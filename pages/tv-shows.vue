<template>
  <div id="tv-shows">
    <!-- Billboard -->
    <section class="section">
      <h3>TV Shows</h3>
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

    <!-- On The Air -->
    <section class="section">
      <!-- title -->
      <h4>On The Air</h4>

      <!-- slider -->

      <!-- data -->
      <b-collapse :open="false">
        <b-button slot="trigger" class="button is-light">
          Data
        </b-button>

        <div class="content">
          <p>{{ onTheAirData }}</p>
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
    onTheAirData: [],
    topRatedData: [],
  }),
  mounted() {
    this.getPopularData()
    this.getOnTheAirData()
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
        .get(`https://api.themoviedb.org/3/tv/popular?${params}`)
        .then(({ data }) => {
          this.popularData = data.results
        })
        .catch((error) => {
          this.popularData = []
          throw error
        })
    },
    // On The Air Data
    getOnTheAirData() {
      const params = [
        'api_key=b1aff257ceb0cbcdd236cef217694a61',
        'language=en-US',
      ].join('&')

      axios
        .get(`https://api.themoviedb.org/3/tv/on_the_air?${params}`)
        .then(({ data }) => {
          this.onTheAirData = data.results
        })
        .catch((error) => {
          this.onTheAirData = []
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
        .get(`https://api.themoviedb.org/3/tv/top_rated?${params}`)
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
    title: 'Notflix TV Shows',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Notflix TV Shows',
      },
    ],
  }),
}
</script>
