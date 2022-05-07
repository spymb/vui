<template>
  <h1>Popover 用法示例</h1>
  <Demo :component="PopoverDemo1" />
  <Demo :component="PopoverDemo2" />
  <Attrs :data="data"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import PopoverDemo1 from '../demos/popover/PopoverDemo1.vue';
import PopoverDemo2 from '../demos/popover/PopoverDemo2.vue';
import {ref} from 'vue';
import Attrs from '../Attrs.vue';

export default {
  components: {PopoverDemo1, PopoverDemo2, Demo, Attrs},
  setup() {
    const data = ref([
      {
        params: 'position',
        desc: '弹出位置',
        type: 'string',
        select: 'top / bottom / left / right',
        default: 'top',
      },
      {
        params: 'trigger',
        desc: '触发方式',
        type: 'string',
        select: 'click / hover',
        default: 'click',
      },
    ]);
    return {
      PopoverDemo1, PopoverDemo2, data
    };
  },
};
</script>