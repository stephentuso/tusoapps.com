<template>
  <div class="feature-card">
    <q-icon class="feature-card-icon text-black" :name="icon" />
    <h6 class="feature-card-title">{{ title }}</h6>
    <p>{{ description }}</p>
  </div>
</template>

<script>
import {
  QIcon,
  QItem,
  QItemSide,
  QItemMain,
  QItemTile
} from 'quasar-framework'

export default {
  components: {
    QIcon,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile
  },

  props: {
    icon: String,

    title: String,
    description: String
  }
}
</script>

<style lang="scss">
.feature-card {
  position: relative;
  padding-top: 48px;
}

.feature-card-title {
  margin-bottom: 16px;
}

.feature-card-icon {
  position: absolute;
  top: 0;
  right: 20px;
  height: 100%;
  font-size: 128px;
  opacity: 0.08;
  z-index: -100;
}
</style>
