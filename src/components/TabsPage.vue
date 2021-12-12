<template>
  <h1>Tabs 示例</h1>
  <Demo :component="TabsDemo"/>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import TabsDemo from './demos/TabsDemo.vue';

export default {
  components: {Demo},
  setup() {
    return {
      TabsDemo
    };
  }
};
</script>