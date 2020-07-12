<template>
  <div id="tv">
    <!-- Data -->
    <section class="section">
      <div class="card">
        <div class="card-content">
          <p><b>route:</b> {{ $route.params.id }}</p>
          <p><b>name:</b> {{ tvData.name }}</p>
          <p><b>tagline:</b> {{ tvData.tagline }}</p>
          <p><b>overview:</b> {{ tvData.overview }}</p>
          <p><b>first_air_date:</b> {{ tvData.first_air_date }}</p>
          <p><b>episode_run_time:</b> {{ tvData.episode_run_time }}</p>
          <p><b>vote_average:</b> {{ tvData.vote_average }}</p>
          <p><b>genres:</b> {{ tvData.genres }}</p>
          <p><b>number_of_seasons:</b> {{ tvData.number_of_seasons }}</p>
          <p><b>seasons:</b> {{ tvData.seasons }}</p>
          <p><b>number_of_episodes:</b> {{ tvData.number_of_episodes }}</p>
          <p><b>backdrop_path:</b> {{ tvData.backdrop_path }}</p>
          <p><b>poster_path:</b> {{ tvData.poster_path }}</p>

          <b-button
            icon-left="plus"
            class="button btn-black"
            style="margin-top: 24px;"
            @click="addToList(tvData)"
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
    tvData: {},
  }),
  mounted() {
    this.getTVData()
  },
  methods: {
    getTVData() {
      const route = this.$route.params.id
      const params = [
        'api_key=b1aff257ceb0cbcdd236cef217694a61',
        'language=en-US',
      ].join('&')

      axios
        .get(`https://api.themoviedb.org/3/tv/${route}?${params}`)
        .then(({ data }) => {
          this.tvData = data
        })
        .catch((error) => {
          this.tvData = {}
          throw error
        })
    },
    addToList(val) {
      if (!this.$store.state.checkJwt) {
        this.$router.push('/login')
      } else {
        console.log(val)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#tv {
  padding-top: 100px;
}
</style>
