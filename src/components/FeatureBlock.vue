<template>
  <div class="base">
    <div class="background-color absolute-top-left fit" :style="{ 'background-color': backgroundColor }"></div>
    <div class="background-img absolute-top-left fit" :style="backgroundStyle"></div>
    <div class="background-dimmer absolute-top-left fit"></div>
    <div class="content">
      <h2 class="title responsive">{{ title }}</h2>
      <br>
      <p class="description">{{ description }}</p>
      <div class="links flex wrap">
        <a v-for="link in links" :key="link.url" :href="link.url">
          <q-btn color="light" outline class="light outline">
            {{ link.label }}
          </q-btn>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { QBtn } from 'quasar-framework'
export default {
  components: {
    QBtn
  },
  props: {
    imageUrl: String,
    title: String,
    description: String,
    links: Array,
    backgroundColor: {
      type: String,
      default: '#666'
    }
  },

  data () {
    return {
      backgroundDim: 0.2
    }
  },

  computed: {
    backgroundStyle () {
      return {
        'background-image': `url(${this.imageUrl})`,
        'background-size': 'cover',
        'background-position': 'center'
      }
    }
  }
}
</script>

<style scoped>
.base {
  height: 400px;
  color: white;
  position: relative;
  padding: 24px;
}

.background-color {
  z-index: -101;
}

.background-img {
  z-index: -100;
}

.background-dimmer {
  background-color: black;
  opacity: 0.3;
  z-index: -99;
  transition: opacity 0.5s ease;
}

.base:hover .background-dimmer {
  opacity: 0.8;
}

.title {
  display: inline-block;
}

.title:after {
  display:block;
  content: '';
  border-bottom: solid 3px white;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
  transform-origin:  0 50%;
}

.base:hover .title:after {
  transform: scaleX(1);
}

.description, .links {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.base:hover .description, .base:hover .links {
  opacity: 1;
}

a {
  color: white;
  margin-right: 20px;
}
</style>
