<template>
  <b-modal
    :active.sync="modal"
    has-modal-card
    class="modal-alert"
    :can-cancel="false"
  >
    <div class="card">
      <div class="card-content">
        <!-- top -->
        <div class="top">
          <img src="~/assets/img/logo.png" alt="logo" width="120" />
        </div>

        <!-- middle -->
        <div class="middle">
          <h5>{{ title }}</h5>
          <p>{{ text }}</p>
        </div>

        <!-- bottom -->
        <div class="bottom">
          <b-button class="button btn-black" expanded @click="close">
            Confirm
          </b-button>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    modal: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
.modal-alert {
  .card {
    width: 440px;
    border-radius: 4px;
    box-shadow: 4px 2px 16px rgba(0, 0, 0, 0.08);

    .card-content {
      text-align: center;

      /* top */
      .top {
        margin: 8px 0 24px;
      }

      /* middle */
      .middle {
        margin-bottom: 40px;

        h5 {
          color: #141414;
          margin-bottom: 8px;
        }

        p {
          color: #141414;
        }
      }

      /* bottom */
      .bottom {
        display: flex;
      }
    }
  }
}

@media (max-width: 768px) {
  .modal-alert {
    padding: 0 8px;

    .card {
      width: 100%;
    }
  }
}
</style>
