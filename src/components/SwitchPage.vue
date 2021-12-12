<template>
    <h1>Switch 示例</h1>
    <Demo :component="SwitchDemo1"/>
    <Demo :component="SwitchDemo2"/>
</template>

<script lang="ts">
import SwitchDemo1 from './demos/SwitchDemo1.vue';
import SwitchDemo2 from './demos/SwitchDemo2.vue';
import Demo from './Demo.vue';

export default {
  components: {Demo},
  setup() {
    return {
      SwitchDemo1,
      SwitchDemo2,
    };
  }
};
</script>