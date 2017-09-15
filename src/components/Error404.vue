<template>
  <div class="error-page window-height window-width bg-light column items-center">
    <div class="error-code bg-primary flex items-center justify-center">
      404
    </div>
    <div>
      <q-card class="error-card bg-white column items-center justify-center">
        <q-icon class="text-grey-5 icon" name="error_outline" />
        <p class="caption text-center">Oops. Nothing here...</p>
        <p class="text-center group">
          <q-btn v-if="canGoBack" color="grey" icon="keyboard_arrow_left" @click="goBack">
            Go back
          </q-btn>
          <router-link to="/">
            <q-btn color="grey" icon="home">
              Go home
            </q-btn>
          </router-link>
        </p>
      </q-card>
    </div>
  </div>
</template>

<script>
import { QCard, QBtn, QIcon } from 'quasar-framework'

export default {
  components: {
    QCard,
    QBtn,
    QIcon
  },

  data: () => ({
    canGoBack: window.history.length > 1
  }),

  methods: {
    goBack () {
      window.history.go(-1)
    }
  }
}
</script>

<style lang="stylus">
.error-page
  overflow scroll
  .error-code
    height 50vh
    width 100%
    padding-top 15vh
    font-size 30vmax
    color rgba(255, 255, 255, .2)
    overflow hidden
  .error-card
    width: 90vw
    max-width 600px
    padding 50px
    position fixed
    left 50%
    top 50%
    transform translateX(-50%) translateY(-50%)
    .icon
      font-size 5rem
</style>
