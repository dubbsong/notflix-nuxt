<template>
  <div id="search">
    <!-- Search -->
    <section class="section">
      <h3>{{ $t('SEARCH.TITLE') }}</h3>

      <b-field>
        <b-input
          v-model="searchWord"
          type="search"
          icon="magnify"
          :placeholder="$t('SEARCH.PH_ENTER_KEYWORD')"
          icon-clickable
          @icon-click="handleSearch"
          @keyup.native.enter="handleSearch"
        ></b-input>
      </b-field>

      <div v-show="related !== ''" class="related">
        <h6>{{ $t('SEARCH.EXPLORE_TITLES_RELATED_TO') }}</h6>
        <h4>{{ related }}</h4>
      </div>
    </section>

    <!-- Result Movies -->
    <section v-show="related !== ''" class="section">
      <!-- title -->
      <h4>{{ $t('SEARCH.SUBTITLE_MOVIES') }}</h4>

      <!-- slider -->
      <div v-if="resultMovies.length" class="slider">
        <div class="slider-content">
          <div
            v-for="(i, index) in resultMovies"
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
                <p v-if="i.release_date !== undefined">
                  {{ i.release_date.slice(0, 4) }}
                </p>
                <p v-else>No information</p>
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

      <!-- No Results -->
      <div v-else>
        <p>{{ $t('SEARCH.NO_RESULTS') }}</p>
      </div>
    </section>

    <!-- Result TV Shows -->
    <section v-show="related !== ''" class="section">
      <!-- title -->
      <h4>{{ $t('SEARCH.SUBTITLE_TV_SHOWS') }}</h4>

      <!-- slider -->
      <div v-if="resultTVShows.length" class="slider">
        <div class="slider-content">
          <div
            v-for="(i, index) in resultTVShows"
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
                <p v-if="i.release_date !== undefined">
                  {{ i.release_date.slice(0, 4) }}
                </p>
                <p v-else>No information</p>
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

      <!-- No Results -->
      <div v-else>
        <p>{{ $t('SEARCH.NO_RESULTS') }}</p>
      </div>
    </section>

    <!-- alertModal -->
    <AlertModal
      :modal="alertModal"
      :title="alertModalTitle"
      @close="alertModal = false"
    />
  </div>
</template>

<script>
import axios from 'axios'
import AlertModal from '~/components/AlertModal'

export default {
  components: {
    AlertModal,
  },
  data: () => ({
    searchWord: '',
    related: '',
    resultMovies: [],
    resultTVShows: [],
    isDisabled: true,
    alertModal: false,
    alertModalTitle: '',
  }),
  methods: {
    handleSearch() {
      if (this.searchWord === '') {
        this.alertModal = true
        this.alertModalTitle = 'Please enter Movie or TV show'
        return
      }

      const params = [
        'api_key=b1aff257ceb0cbcdd236cef217694a61',
        'language=en-US',
      ].join('&')
      const searchWord = this.searchWord

      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?${params}&query=${searchWord}`
        )
        .then(({ data }) => {
          this.resultMovies = data.results
        })
        .catch((error) => {
          this.resultMovies = []
          throw error
        })

      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?${params}&query=${searchWord}`
        )
        .then(({ data }) => {
          this.resultTVShows = data.results
        })
        .catch((error) => {
          this.resultTVShows = []
          throw error
        })

      this.related = this.searchWord
      this.searchWord = ''
    },
    moveToDetail(val) {
      if (val.title) {
        this.$router.push(`/movie/${val.id}`)
      } else {
        this.$router.push(`/tv/${val.id}`)
      }
    },
  },
  head: () => ({
    title: 'Notflix Search',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Notflix Search',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
#search {
  padding-top: 100px;

  section {
    &:first-child {
      margin-bottom: 24px;
    }

    h3 {
      margin-bottom: 8px;
    }

    .field {
      margin-bottom: 0;
    }

    /* related */
    .related {
      display: flex;
      align-items: center;

      h6 {
        font-weight: normal;
        margin-right: 8px;
      }
    }

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
  #search {
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
