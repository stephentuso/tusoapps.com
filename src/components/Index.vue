<template>
  <q-layout>
    <q-toolbar slot="header" inverted color="primary">
      <q-toolbar-title class="font-primary" :padding="0" style="color: black">
        TUSO APPS
      </q-toolbar-title>
    </q-toolbar>
    <div class="layout-view">
      <div class="header text-center">
        <h2 class="responsive">Apps for schools, businesses, and organizations</h2>
      </div>
      <div>
        <div class="row">
          <feature-block class="col-md-6 col-sm-12"
                         v-for="client in clients"
                         :key="client[0]"
                         :image-url="client[0]"
                         :title="client[1]"
                         :description="client[2]"
                         :links="client[3]"
          ></feature-block>
        </div>
      </div>
      <div class="container padded-top padded-bottom">
        <div class="row lg-gutter">
          <template v-for="feature in features">
            <feature-card class="col-md-6 col-sm-12" :icon="feature[0]" :title="feature[1]" :description="feature[2]"></feature-card>
          </template>
        </div>
      </div>
      <div class="contact text-center">
        <h5>Connect to your community.</h5>
        <p>For pricing and details:</p>
        <p><a href="mailto:contact@tusoapps.com">
          <q-btn class="bg-white text-primary">Contact</q-btn>
        </a></p>
        <p>contact@tusoapps.com</p>
      </div>
      <footer class="text-center">
        <p>© 2017 Tuso Apps</p>
      </footer>
    </div>
  </q-layout>
</template>

<script>
import {
  QBtn,
  QLayout,
  QToolbar,
  QToolbarTitle
} from 'quasar-framework'
import FeatureCard from './FeatureCard.vue'
import FeatureBlock from './FeatureBlock.vue'

export default {
  components: {
    FeatureCard,
    FeatureBlock,
    QBtn,
    QLayout,
    QToolbar,
    QToolbarTitle
  },

  data () {
    return {
      features: require('../data/features.json'),
      clients: require('../data/clients.json')
    }
  }
}
</script>

<style lang="scss">
  .contact {
    background: #2b84ac;
    padding: 30px;
    color: white;

    h5 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
    }

  }
</style>
