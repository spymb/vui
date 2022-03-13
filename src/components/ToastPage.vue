<template>
  <h1>Toast 示例</h1>
  <Demo :component="ToastDemoDefault" />
  <Demo :component="ToastDemoLevel" />
  <Demo :component="ToastDemoClose" />
</template>

<script lang="ts">
import ToastDemoDefault from './demos/ToastDemoDefault.vue';
import ToastDemoLevel from './demos/ToastDemoLevel.vue';
import ToastDemoClose from './demos/ToastDemoClose.vue';
import Demo from './Demo.vue';

export default {
  components: {ToastDemoDefault, Demo, ToastDemoLevel, ToastDemoClose},
  setup() {
    return {
      ToastDemoDefault,
      ToastDemoLevel,
      ToastDemoClose
    }
  }
}
</script>