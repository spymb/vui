<template>
  <h1>Input 示例</h1>
  <Demo :component="InputDemoDefault" />
  <Demo :component="InputDemoPassword" />
  <Demo :component="InputDemoClear" />
</template>

<script lang="ts">
import Demo from './Demo.vue';
import InputDemoDefault from './demos/InputDemoDefault.vue';
import InputDemoPassword from './demos/InputDemoPassword.vue';
import InputDemoClear from './demos/InputDemoClear.vue';

export default {
  components: {InputDemoClear, InputDemoDefault, Demo, InputDemoPassword},
  setup() {
    return {
      Demo,InputDemoDefault,
      InputDemoPassword,
      InputDemoClear
    }
  }
}
</script>