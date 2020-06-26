<template>
  <div id="login">
    <section class="section">
      <div class="card">
        <div class="card-content">
          <!-- head -->
          <div class="head">
            <img src="~/assets/img/logo.png" alt="logo" width="120" />
            <h4>LOGIN</h4>
          </div>

          <!-- hr -->
          <hr />

          <!-- info -->
          <div class="info">
            <h6>Please enter ID and Password below.</h6>
            <p><b>ID:</b> user1</p>
            <p><b>PW:</b> User12#</p>
          </div>

          <!-- hr -->
          <hr />

          <!-- form -->
          <div class="form">
            <!-- ID -->
            <b-field label="ID" label-position="on-border">
              <b-input
                v-model="userId"
                type="text"
                placeholder="Please enter your ID"
                @keyup.native.enter="handleSubmit"
              ></b-input>
            </b-field>

            <!-- PW -->
            <b-field label="Password" label-position="on-border">
              <b-input
                v-model="userPassword"
                type="password"
                placeholder="Please enter your password"
                @keyup.native.enter="handleSubmit"
              ></b-input>
            </b-field>
          </div>

          <!-- submit -->
          <div class="submit">
            <b-button class="button btn-black" expanded @click="handleSubmit">
              LOGIN
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
        this.alertModalTitle = 'Please enter your ID'
        return
      }

      if (this.userPassword === '') {
        this.alertModal = true
        this.alertModalTitle = 'Please enter your password'
        return
      }

      if (this.userId !== 'user1' || this.userPassword !== 'User12#') {
        this.alertModal = true
        this.alertModalTitle = 'Incorrect ID or Password'
        return
      }

      console.log('SUCCESS')

      this.$store.dispatch('login', '1234-dummy-JWT-token-5678')
      this.$store.commit('checkJwt', true)
      this.$router.push('/my-list')
    },
  },
}
</script>

<style lang="scss" scoped>
#login {
  section {
    min-height: calc(100vh - 140px);
    display: flex;
    justify-content: center;
    align-items: center;

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
