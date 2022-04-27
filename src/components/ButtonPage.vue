<template>
  <h1>Button 示例</h1>
  <Demo :component="ButtonDemo1"/>
  <Demo :component="ButtonDemo2"/>
  <Demo :component="ButtonDemo3"/>
  <Demo :component="ButtonDemo4"/>
  <Demo :component="ButtonDemo5"/>
  <Attrs :data="data"/>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import ButtonDemo1 from './demos/ButtonDemo1.vue';
import ButtonDemo2 from './demos/ButtonDemo2.vue';
import ButtonDemo3 from './demos/ButtonDemo3.vue';
import ButtonDemo4 from './demos/ButtonDemo4.vue';
import ButtonDemo5 from './demos/ButtonDemo5.vue';
import {ref} from 'vue';
import Attrs from './Attrs.vue';

export default {
  components: {Attrs, Demo},
  setup() {
    const data = ref([
      {
        params: 'theme',
        desc: '按钮类型',
        type: 'string',
        select: 'button / link / text',
        default: 'button',
      },
      {
        params: 'size',
        desc: '按钮大小',
        type: 'string',
        select: 'small / middle / large',
        default: 'middle',
      },
      {
        params: 'level',
        desc: '按钮级别',
        type: 'string',
        select: 'normal / main / warning / danger',
        default: 'normal',
      },
      {
        params: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      },
      {
        params: 'loading',
        desc: '是否加载',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      }
    ]);
    return {
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
      ButtonDemo5,
      data
    };
  }
};
</script>