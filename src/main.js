import 'quasar-extras/material-icons'

import './themes/app.mat.styl'
import './themes/custom.css'

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'

Vue.use(Quasar)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  render: h => h(require('./App'))
})
