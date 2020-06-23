<template>
  <header>
    <div class="container">
      <!-- Left -->
      <ul class="left">
        <li>
          <nuxt-link to="/">
            <img src="~/assets/img/logo.png" alt="logo" width="100" />
          </nuxt-link>
        </li>
        <li class="is-hidden-mobile">
          <nuxt-link to="/about">
            About
          </nuxt-link>
        </li>
        <li class="is-hidden-mobile">
          <nuxt-link to="/movies">
            Movies
          </nuxt-link>
        </li>
        <li class="is-hidden-mobile">
          <nuxt-link to="/tv">
            TV Shows
          </nuxt-link>
        </li>
        <li class="is-hidden-mobile">
          <nuxt-link to="/my-list">
            My List
          </nuxt-link>
        </li>
      </ul>

      <!-- Right -->
      <ul class="right">
        <li>
          <nuxt-link to="/search">
            <b-icon icon="magnify" />
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/login">
            <b-icon icon="login-variant" />
          </nuxt-link>
        </li>
        <li>
          <b-dropdown position="is-bottom-left">
            <a slot="trigger" role="button">
              <b-icon icon="account-circle" />
            </a>

            <b-dropdown-item has-link>
              <nuxt-link to="/about">
                <img src="~/assets/img/omb.png" alt="omb img" width="20" />
                오늘도 많이 배웁니다.
              </nuxt-link>
            </b-dropdown-item>

            <hr class="dropdown-divider" />

            <b-dropdown-item has-link>
              <nuxt-link to="/about">
                <b-icon icon="account" />
                About
              </nuxt-link>
            </b-dropdown-item>

            <b-dropdown-item has-link>
              <a
                href="https://github.com/dubbsong/notflix-nuxt"
                target="_blank"
              >
                <b-icon icon="link-variant" />
                Github repo
              </a>
            </b-dropdown-item>

            <b-dropdown-item has-link @click="handleLogout">
              <a>
                <b-icon icon="logout-variant" />
                Logout
              </a>
            </b-dropdown-item>
          </b-dropdown>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({}),
  mounted() {},
  methods: {
    handleLogout() {
      console.log('Handle Logout')
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
  align-items: center;
  padding: 0 5%;
  z-index: 10;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

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
          color: #696969;
          transition: all 0.2s ease-in-out;

          &.nuxt-link-exact-active {
            color: #fff;
          }

          &:hover {
            color: #fff;
          }
        }
      }
    }

    /* Right */
    .right {
      display: flex;

      li {
        display: flex;
        align-items: center;
        margin-left: 16px;

        a {
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
}
</style>
