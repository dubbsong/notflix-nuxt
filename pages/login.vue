<template>
  <div id="login">
    <section class="section">
      <div class="card">
        <div class="card-content">
          <!-- head -->
          <div class="head">
            <img src="~/assets/img/logo.png" alt="logo" width="120" />
            <h4>{{ $t('LOGIN.TITLE') }}</h4>
          </div>

          <!-- hr -->
          <hr />

          <!-- info -->
          <div class="info">
            <h6>{{ $t('LOGIN.TEXT_INFO') }}</h6>
            <p>{{ $t('LOGIN.TEXT_ID') }}: <b>user1</b></p>
            <p>{{ $t('LOGIN.TEXT_PW') }}: <b>User12#</b></p>
          </div>

          <!-- hr -->
          <hr />

          <!-- form -->
          <div class="form">
            <!-- ID -->
            <b-field :label="$t('LOGIN.LABEL_ID')" label-position="on-border">
              <b-input
                v-model="userId"
                type="text"
                :placeholder="$t('LOGIN.ENTER_ID')"
                @keyup.native.enter="handleSubmit"
              ></b-input>
            </b-field>

            <!-- PW -->
            <b-field
              :label="$t('LOGIN.LABEL_PASSWORD')"
              label-position="on-border"
            >
              <b-input
                v-model="userPassword"
                type="password"
                :placeholder="$t('LOGIN.ENTER_PASSWORD')"
                @keyup.native.enter="handleSubmit"
              ></b-input>
            </b-field>
          </div>

          <!-- submit -->
          <div class="submit">
            <b-button class="button btn-black" expanded @click="handleSubmit">
              {{ $t('LOGIN.BUTTON_LOGIN') }}
            </b-button>
          </div>
        </div>
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
import AlertModal from '~/components/AlertModal'

export default {
  components: {
    AlertModal,
  },
  data: () => ({
    userId: '',
    userPassword: '',
    alertModal: false,
    alertModalTitle: '',
  }),
  methods: {
    handleSubmit() {
      if (this.userId === '') {
        this.alertModal = true
        this.alertModalTitle = this.$t('LOGIN.ENTER_ID')
        return
      }

      if (this.userPassword === '') {
        this.alertModal = true
        this.alertModalTitle = this.$t('LOGIN.ENTER_PASSWORD')
        return
      }

      if (this.userId !== 'user1' || this.userPassword !== 'User12#') {
        this.alertModal = true
        this.alertModalTitle = this.$t('LOGIN.INCORRECT_ID_OR_PASSWORD')
        return
      }

      this.$store.dispatch('login', '1234-dummy-JWT-token-5678')
      this.$store.commit('checkJwt', true)
      this.$router.push('/my-list')
    },
  },
  head: () => ({
    title: 'Notflix Login',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Notflix Login',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
#login {
  section {
    min-height: calc(100vh - 72px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 68px;

    .card {
      width: 400px;
      margin: 0 auto;

      .card-content {
        text-align: center;
        padding: 2rem 3rem;

        /* head */
        .head {
          img {
            margin-bottom: 16px;
          }
        }

        /* info */
        .info {
          h6 {
            font-size: 16px;
            margin-bottom: 8px;
          }
        }

        /* form */
        .form {
          margin-bottom: 40px;

          .field {
            margin-bottom: 24px;
          }
        }

        /* submit */
      }
    }
  }
}

@media (max-width: 768px) {
  #login {
    section {
      .card {
        width: 100%;

        .card-content {
          padding: 1.5rem;
        }
      }
    }
  }
}
</style>
