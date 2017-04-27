<template>
  <q-layout>
    <div slot="header" class="toolbar inverted blue">
      <q-toolbar-title :padding="0" style="color: black">
        TUSO APPS
      </q-toolbar-title>
    </div>
    <div class="layout-view">
      <div class="header text-center">
        <h2>Apps for schools, businesses, and organizations</h2>
      </div>
      <div>
        <div class="row">
          <feature-block class="width-1of2" image-url="statics/nelson_android_frame.jpg" title="Nelson County Schools" description="something"></feature-block>
          <feature-block class="width-1of2" image-url="statics/nbs_ios_frame1.jpg" title="North Branch School" description="something"></feature-block>
        </div>
      </div>
      <div class="container padded">
        <div class="flex wrap gutter">
          <template v-for="feature in features">
            <feature-card class="width-1of2" :icon="feature[0]" :title="feature[1]" :description="feature[2]"></feature-card>
          </template>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
  import FeatureCard from './FeatureCard.vue'
  import FeatureBlock from './FeatureBlock.vue'

  export default {
    components: {
      FeatureCard,
      FeatureBlock
    },

    data () {
      return {
        features: require('../data/features.json')
      }
    },

    methods: {

    }
  }
</script>
