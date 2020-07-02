<template>
  <header>
    <!-- Left -->
    <ul class="left">
      <!-- logo -->
      <li>
        <nuxt-link to="/">
          <img src="~/assets/img/logo.png" alt="logo" width="100" />
        </nuxt-link>
      </li>

      <!-- about -->
      <li class="is-hidden-mobile">
        <nuxt-link to="/about">
          About
        </nuxt-link>
      </li>

      <!-- movies -->
      <li class="is-hidden-mobile">
        <nuxt-link to="/movies">
          Movies
        </nuxt-link>
      </li>

      <!-- tv shows -->
      <li class="is-hidden-mobile">
        <nuxt-link to="/tv-shows">
          TV Shows
        </nuxt-link>
      </li>

      <!-- my list -->
      <li class="is-hidden-mobile">
        <nuxt-link to="/my-list">
          My List
        </nuxt-link>
      </li>

      <!-- i18n -->
    </ul>

    <!-- Right -->
    <ul class="right">
      <!-- search -->
      <li>
        <nuxt-link to="/search">
          <b-icon icon="magnify" />
        </nuxt-link>
      </li>

      <!-- login -->
      <li v-show="!$store.state.checkJwt">
        <nuxt-link to="/login">
          <b-icon icon="login-variant" />
        </nuxt-link>
      </li>

      <!-- account -->
      <li v-show="$store.state.checkJwt">
        <b-dropdown position="is-bottom-left">
          <a slot="trigger" role="button">
            <b-icon icon="account-circle" />
          </a>

          <!-- username -->
          <b-dropdown-item has-link>
            <nuxt-link to="/about">
              <img src="~/assets/img/omb.png" alt="omb img" width="20" />
              오늘도 많이 배웁니다.
            </nuxt-link>
          </b-dropdown-item>

          <!-- hr -->
          <hr class="dropdown-divider" />

          <!-- about -->
          <b-dropdown-item has-link>
            <nuxt-link to="/about">
              <b-icon icon="account" />
              About
            </nuxt-link>
          </b-dropdown-item>

          <!-- link -->
          <b-dropdown-item has-link>
            <a href="https://github.com/dubbsong/notflix-nuxt" target="_blank">
              <b-icon icon="link-variant" />
              Github repo
            </a>
          </b-dropdown-item>

          <!-- logout -->
          <b-dropdown-item has-link @click="handleLogout">
            <a>
              <b-icon icon="logout-variant" />
              Logout
            </a>
          </b-dropdown-item>
        </b-dropdown>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  mounted() {
    if (this.$cookies.get('jwt') !== undefined) {
      this.$store.commit('checkJwt', true)
    }
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('logout')
      this.$store.commit('checkJwt', false)
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  background-color: #141414;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  z-index: 10;

  /* Left */
  .left {
    display: flex;

    li {
      display: flex;
      align-items: center;
      margin-right: 24px;

      a {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
        color: #b3b3b3;
        transition: all 0.2s ease-in-out;

        &.nuxt-link-exact-active {
          color: #fff;
        }

        &:hover {
          color: #fff;
        }
      }

      .dropdown {
        .dropdown-menu {
          .dropdown-content {
            .dropdown-item {
              color: #141414;
            }
          }
        }
      }
    }
  }

  /* Right */
  .right {
    display: flex;

    li {
      margin-left: 16px;

      a {
        display: flex;
        align-items: center;

        .icon {
          color: #fff;
        }
      }

      .dropdown {
        .dropdown-menu {
          .dropdown-content {
            .has-link {
              a {
                display: flex;
                align-items: center;
                font-weight: bold;

                img {
                  margin-right: 8px;
                }

                span {
                  color: #141414;
                  margin-right: 8px;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  header {
    /* Left */
    .left {
      li {
        align-items: flex-end;
        margin-right: 8px;
      }
    }

    /* Right */
    .right {
      li {
        margin-left: 8px;
      }
    }
  }
}
</style>
