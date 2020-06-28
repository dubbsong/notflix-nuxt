<template>
  <div id="test">
    <section class="section">
      <h3 style="margin-bottom: 24px;">Test</h3>

      <!-- JWT -->
      <div class="card">
        <div class="card-content">
          <h4>JWT token</h4>

          <b-button class="button is-dark" @click="checkJwt">
            Check
          </b-button>
        </div>
      </div>

      <!-- Rate -->
      <div class="card">
        <div class="card-content">
          <h4>Rate</h4>

          <b-rate v-model="rate" icon-pack="mdi" icon="star"></b-rate>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    rate: 2,
  }),
  methods: {
    checkJwt() {
      alert(sessionStorage.getItem('jwt'))
    },
  },
  head: () => ({
    title: 'Notflix Test',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Notflix Test',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
#test {
  section {
    .card {
      margin-bottom: 24px;

      .card-content {
        h4 {
          margin-bottom: 8px;
        }
      }
    }
  }
}
</style>
