<template>
  <h1>Layout 组件示例</h1>
  <Demo :component="LayoutDemo1" />
  <Demo :component="LayoutDemo2" />
  <Demo :component="LayoutDemo3" />
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import LayoutDemo1 from '../demos/layout/LayoutDemo1.vue';
import LayoutDemo2 from '../demos/layout/LayoutDemo2.vue';
import LayoutDemo3 from '../demos/layout/LayoutDemo3.vue';
export default {
  components: {LayoutDemo1, LayoutDemo2,LayoutDemo3, Demo},
  setup() {
    return {
      LayoutDemo1, LayoutDemo2, LayoutDemo3,
    };
  },
};
</script>