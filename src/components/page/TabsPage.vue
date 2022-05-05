<template>
  <h1>Tabs 组件示例</h1>
  <Demo :component="TabsDemo"/>
  <Attrs :data="data"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import TabsDemo from '../demos/tabs/TabsDemo.vue';
import Attrs from '../Attrs.vue';
import {ref} from 'vue';

export default {
  components: {Attrs, Demo},
  setup() {
    const data = ref([
      {
        params: 'title',
        desc: '标题名称',
        type: 'string',
        select: '--',
        default: '--',
      },
    ]);
    return {
      TabsDemo, data
    };
  }
};
</script>