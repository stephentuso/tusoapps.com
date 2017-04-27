<template>
  <div>
    <div>
      <div class="item">
        <i class="item-primary">{{ icon }}</i>
        <h6 class="item-content">
          {{ title }}
        </h6>
      </div>
      <div class="card-content">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    description: String
  }
}
</script>

<style scoped>
  .item-content {
    margin-left: 56px !important;
  }
</style>
