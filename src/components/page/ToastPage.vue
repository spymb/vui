<template>
  <h1>Toast 组件示例</h1>
  <Demo :component="ToastDemoDefault" />
  <Demo :component="ToastDemoLevel" />
  <Demo :component="ToastDemoClose" />
</template>

<script lang="ts">
import ToastDemoDefault from '../demos/toast/ToastDemoDefault.vue';
import ToastDemoLevel from '../demos/toast/ToastDemoLevel.vue';
import ToastDemoClose from '../demos/toast/ToastDemoClose.vue';
import Demo from '../Demo.vue';

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