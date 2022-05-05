<template>
  <h1>Layout 示例</h1>
  <Demo :component="LayoutDemo" />
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import LayoutDemo from '../demos/layout/LayoutDemo.vue';
export default {
  components: {LayoutDemo, Demo},
  setup() {
    return {
      LayoutDemo
    };
  },
};
</script>