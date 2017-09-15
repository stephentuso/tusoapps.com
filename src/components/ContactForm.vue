<template>
  <div>
    <div class="row gutter">
      <div class="floating-label col-6">
        <div class="floating-label">
          <input required class="full-width" v-model="name">
          <label>Name</label>
        </div>
      </div>
      <div class="col-6">
        <div class="floating-label">
          <input required class="full-width" v-model="email">
          <label>Email</label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="floating-label">
          <textarea required class="full-width" v-model="message"></textarea>
          <label>Message</label>
        </div>
      </div>
    </div>
    <q-btn color="primary" @click="submit">Submit</q-btn>
  </div>
</template>

<script>
import { QBtn } from 'quasar-framework'

export default {
  components: {
    QBtn
  },

  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },

  methods: {
    submit () {

    }
  }
}
</script>

<style scoped>
  textarea {
    margin-bottom: 20px;
  }
</style>
