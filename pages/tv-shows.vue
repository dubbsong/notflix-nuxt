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
      <div class="slider">
        <div class="slider-content">
          <div
            v-for="(i, index) in popularData"
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

    <!-- On The Air -->
    <section class="section">
      <!-- title -->
      <h4>On The Air</h4>

      <!-- slider -->
      <div class="slider">
        <div class="slider-content">
          <div
            v-for="(i, index) in onTheAirData"
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

    <!-- Top Rated -->
    <section class="section">
      <!-- title -->
      <h4>Top Rated</h4>

      <!-- slider -->
      <div class="slider">
        <div class="slider-content">
          <div
            v-for="(i, index) in topRatedData"
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

    <!-- Airing Today -->
    <section class="section">
      <!-- title -->
      <h4>Airing Today</h4>

      <!-- slider -->
      <div class="slider">
        <div class="slider-content">
          <div
            v-for="(i, index) in airingTodayData"
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
    popularData: [],
    onTheAirData: [],
    topRatedData: [],
    airingTodayData: [],
    isDisabled: true,
  }),
  mounted() {
    this.getPopularData()
    this.getOnTheAirData()
    this.getTopRatedData()
    this.getAiringTodayData()
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
    // Airing Today Data
    getAiringTodayData() {
      const params = [
        'api_key=b1aff257ceb0cbcdd236cef217694a61',
        'language=en-US',
      ].join('&')

      axios
        .get(`https://api.themoviedb.org/3/tv/airing_today?${params}`)
        .then(({ data }) => {
          this.airingTodayData = data.results
        })
        .catch((error) => {
          this.airingTodayData = []
          throw error
        })
    },
    moveToDetail(val) {
      this.$router.push(`/tv/${val.id}`)
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

<style lang="scss" scoped>
#tv-shows {
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
  #tv-shows {
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
