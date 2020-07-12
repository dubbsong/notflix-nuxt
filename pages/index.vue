<template>
  <div id="home">
    <!-- Billboard -->
    <div class="billboard">
      <!-- bg -->
      <div
        v-if="randomData"
        class="bg"
        :style="{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: 'cover',
          height: '80vh',
          backgroundPosition: 'top center',
        }"
      >
        <div class="gradient"></div>
      </div>

      <!-- info -->
      <div class="info">
        <h3 v-if="randomData">
          {{
            randomData.title.length > 32
              ? randomData.title.slice(0, 32) + '...'
              : randomData.title
          }}
        </h3>
        <h6 v-if="randomData">
          {{
            randomData.overview.length > 200
              ? randomData.overview.slice(0, 200) + '...'
              : randomData.overview
          }}
        </h6>

        <div class="btns">
          <b-button
            icon-left="play"
            class="button"
            @click="moveToDetail(randomData)"
          >
            Play
          </b-button>
          <b-button
            icon-left="plus"
            class="button"
            @click="addToList(randomData)"
          >
            Add to List
          </b-button>
        </div>
      </div>
    </div>

    <!-- My List -->
    <section v-show="$store.state.checkJwt" class="section">
      <!-- title -->
      <h4>{{ $t('PAGE.MY_LIST') }}</h4>

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
      <h4>{{ $t('HOME.TRENDING_NOW_MOVIES') }}</h4>

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
      <h4>{{ $t('HOME.TRENDING_NOW_TV_SHOWS') }}</h4>

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
  computed: {
    randomNumber() {
      return Math.floor(Math.random() * this.trendingMovies.length)
    },
    randomData() {
      return this.trendingMovies[this.randomNumber]
    },
    backgroundUrl() {
      return 'https://image.tmdb.org/t/p/w500' + this.randomData.backdrop_path
    },
  },
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
      if (val.title) {
        this.$router.push(`/movie/${val.id}`)
      } else {
        this.$router.push(`/tv/${val.id}`)
      }
    },
    addToList(val) {
      if (!this.$store.state.checkJwt) {
        this.$router.push('/login')
      } else {
        console.log(val)
      }
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
  /* Billboard */
  .billboard {
    /* bg */
    .bg {
      position: relative;

      .gradient {
        background-image: linear-gradient(
          180deg,
          transparent,
          rgba(40, 40, 40, 0.6),
          rgba(20, 20, 20, 1)
        );
        height: 80vh;
      }
    }

    /* info */
    .info {
      position: absolute;
      top: 36%;
      left: 0;
      width: 40%;
      height: 80vh;
      padding: 5%;

      .btns {
        margin-top: 8px;

        button {
          width: 120px;
          height: 36px;
          background-color: rgba(51, 51, 51, 0.4);
          color: #fff;
          font-weight: bold;
          letter-spacing: 1.5px;
          border: none;
          transition: all 0.2s ease-in-out;

          &:first-child {
            margin-right: 8px;
          }

          &:hover {
            background-color: #e6e6e6;
            color: #141414;
          }
        }
      }
    }
  }

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
    /* Billboard */
    .billboard {
      /* bg */

      /* info */
      .info {
        width: 100%;
        top: 45%;
      }
    }

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
