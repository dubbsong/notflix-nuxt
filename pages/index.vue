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

      <!-- slider -->
      <div class="slider">
        <div class="slider-content">
          <div
            v-for="(i, index) in trendingMovies"
            :key="index"
            class="slider-item"
            @click="moveToDetail(i)"
          >
            <!-- backdrop -->
            <div class="backdrop">
              <img
                v-if="i.backdrop_path === null"
                src="~/assets/img/no-poster.png"
                alt="no poster"
              />
              <img
                v-else
                :src="'https://image.tmdb.org/t/p/w200' + i.backdrop_path"
                alt="backdrop img"
              />
            </div>

            <!-- logo -->
            <div class="logo">
              <img src="~/assets/img/logo-n.png" alt="logo n" />
            </div>

            <!-- hovered -->
            <div class="hovered">
              <!-- left -->
              <div class="left">
                <b-icon icon="play-circle" />
                <h6>
                  {{
                    i.title.length > 16 ? i.title.slice(0, 16) + '...' : i.title
                  }}
                </h6>
                <p>{{ i.release_date.slice(0, 4) }}</p>
              </div>

              <!-- right -->
              <div class="right">
                <b-rate
                  v-model="i.vote_average"
                  icon-pack="mdi"
                  icon="star"
                  :disabled="isDisabled"
                  size="is-small"
                ></b-rate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trending Now (TV Shows) -->
    <section class="section">
      <!-- title -->
      <h4>Trending Now TV Shows</h4>

      <!-- slider -->
      <div class="slider">
        <div class="slider-content">
          <div
            v-for="(i, index) in trendingTVShows"
            :key="index"
            class="slider-item"
            @click="moveToDetail(i)"
          >
            <!-- backdrop -->
            <div class="backdrop">
              <img
                v-if="i.backdrop_path === null"
                src="~/assets/img/no-poster.png"
                alt="no poster"
              />
              <img
                v-else
                :src="'https://image.tmdb.org/t/p/w200' + i.backdrop_path"
                alt="backdrop img"
              />
            </div>

            <!-- logo -->
            <div class="logo">
              <img src="~/assets/img/logo-n.png" alt="logo n" />
            </div>

            <!-- hovered -->
            <div class="hovered">
              <!-- left -->
              <div class="left">
                <b-icon icon="play-circle" />
                <h6>
                  {{
                    i.name.length > 16 ? i.name.slice(0, 16) + '...' : i.name
                  }}
                </h6>
                <p>{{ i.first_air_date.slice(0, 4) }}</p>
              </div>

              <!-- right -->
              <div class="right">
                <b-rate
                  v-model="i.vote_average"
                  icon-pack="mdi"
                  icon="star"
                  :disabled="isDisabled"
                  size="is-small"
                ></b-rate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    trendingMovies: [],
    trendingTVShows: [],
    isDisabled: true,
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
    moveToDetail(val) {
      // if (val.title) {
      //   this.$router.push(`/movie/${val.id}`)
      // } else {
      //   this.$router.push(`/tv/${val.id}`)
      // }
      console.log(val.id)
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

<style lang="scss" scoped>
#home {
  section {
    /* title */

    /* slider */
    .slider {
      margin-top: -4px;
      margin-left: -4px;

      .slider-content {
        display: flex;
        overflow-x: auto;
        padding: 16px 0;

        &::-webkit-scrollbar {
          display: none;
        }

        .slider-item {
          position: relative;
          min-width: 250px;
          height: 140px;
          margin: 0 4px;
          transition: all 0.2s ease-in-out;
          cursor: pointer;

          &:hover {
            transform: scale(1.2);
            margin: 0 24px;
          }

          /* backdrop */
          .backdrop {
            position: absolute;
            width: 100%;
            height: 100%;

            img {
              width: 100%;
              height: 100%;
            }
          }

          /* logo */
          .logo {
            img {
              position: absolute;
              top: 4px;
              left: 2px;
              width: 20px;
            }
          }

          /* hovered */
          .hovered {
            position: absolute;
            background-color: transparent;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding: 4px 8px;
            opacity: 0;
            transition: all 0.2s ease-in-out;

            &:hover {
              background-color: rgba(0, 0, 0, 0.4);
              opacity: 1;
            }

            /* left */
            .left {
              h6 {
                font-size: 16px;
              }

              p {
                font-size: 12px;
                font-weight: bold;
                margin-top: -4px;
              }
            }

            /* right */
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  #home {
    section {
      padding: 1rem 1.5rem;

      /* title */

      /* slider */
      .slider {
        margin-top: 0;

        .slider-content {
          padding: 4px 0;
          margin-left: -4px;

          .slider-item {
            /* backdrop */

            /* logo */

            /* hovered */
            .hovered {
              background-color: rgba(0, 0, 0, 0.2);
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>
