<template>
  <h1>Popover 组件示例</h1>
  <Demo :component="PopoverDemo1" />
  <Demo :component="PopoverDemo2" />
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import PopoverDemo1 from '../demos/popover/PopoverDemo1.vue';
import PopoverDemo2 from '../demos/popover/PopoverDemo2.vue';

export default {
  components: {PopoverDemo1, PopoverDemo2, Demo},
  setup() {
    return {
      PopoverDemo1, PopoverDemo2,
    };
  },
};
</script>