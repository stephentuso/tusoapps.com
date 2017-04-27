<template>
  <div>
    <div class="row gutter">
      <div class="floating-label width-1of2">
        <div class="floating-label">
          <input required class="full-width" v-model="name">
          <label>Name</label>
        </div>
      </div>
      <div class="width-1of2">
        <div class="floating-label">
          <input required class="full-width" v-model="email">
          <label>Email</label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="width-2of2">
        <div class="floating-label">
          <textarea required class="full-width" v-model="message"></textarea>
          <label>Message</label>
        </div>
      </div>
    </div>
    <button class="primary" @click="submit">Submit</button>
  </div>
</template>

<script>
export default {
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
