<template>
  <h1>Toast 示例</h1>
  <Demo :component="ToastDemoDefault" />
</template>

<script lang="ts">
import ToastDemoDefault from './demos/ToastDemoDefault.vue';
import Demo from './Demo.vue';

export default {
  components: {ToastDemoDefault, Demo},
  setup() {
    return {
      ToastDemoDefault
    }
  }
}
</script>

<style lang="scss" scoped>

</style>