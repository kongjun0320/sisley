<template>
  <div class="main-wrapper">
    <tab />
    <router-view></router-view>
  </div>
</template>

<script>
import Tab from '../home/Tab.vue'

export default {
  name: 'Home',
  components: { Tab }
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  padding-top: 0.63rem;
}
</style>
