<template>
  <h1>Input 示例</h1>
  <Demo :component="InputDemoDefault" />
</template>

<script lang="ts">
import Demo from './Demo.vue';
import InputDemoDefault from './demos/InputDemoDefault.vue';

export default {
  components: {InputDemoDefault, Demo,},
  setup() {
    return {
      Demo,InputDemoDefault
    }
  }
}
</script>