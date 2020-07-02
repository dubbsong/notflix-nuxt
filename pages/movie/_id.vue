<template>
  <div id="movie">
    <!-- Data -->
    <section class="section">
      <div class="card">
        <div class="card-content">
          <p><b>route:</b> {{ $route.params.id }}</p>
          <p><b>title:</b> {{ movieData.title }}</p>
          <p><b>tagline:</b> {{ movieData.tagline }}</p>
          <p><b>overview:</b> {{ movieData.overview }}</p>
          <p><b>release_date:</b> {{ movieData.release_date }}</p>
          <p><b>runtime:</b> {{ movieData.runtime }}</p>
          <p><b>vote_average:</b> {{ movieData.vote_average }}</p>
          <p><b>genres:</b> {{ movieData.genres }}</p>
          <p><b>video:</b> {{ movieData.video }}</p>
          <p><b>backdrop_path:</b> {{ movieData.backdrop_path }}</p>
          <p><b>poster_path:</b> {{ movieData.poster_path }}</p>

          <b-button
            icon-left="plus"
            class="button btn-black"
            style="margin-top: 24px;"
            @click="addToList"
          >
            Add to list
          </b-button>
        </div>
      </div>
    </section>

    <!-- Movie -->
    <section class="section">
      <div class="content"></div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    movieData: {},
  }),
  mounted() {
    this.getMovieData()
  },
  methods: {
    getMovieData() {
      const route = this.$route.params.id
      const params = [
        'api_key=b1aff257ceb0cbcdd236cef217694a61',
        'language=en-US',
      ].join('&')

      axios
        .get(`https://api.themoviedb.org/3/movie/${route}?${params}`)
        .then(({ data }) => {
          this.movieData = data
        })
        .catch((error) => {
          this.movieData = {}
          throw error
        })
    },
    addToList() {
      console.log('Add to list')
    },
  },
}
</script>
