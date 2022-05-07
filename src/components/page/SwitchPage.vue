<template>
    <h1>Switch 用法示例</h1>
    <Demo :component="SwitchDemo1"/>
    <Demo :component="SwitchDemo2"/>
  <Attrs :data="data"/>
</template>

<script lang="ts">
import SwitchDemo1 from '../demos/switch/SwitchDemo1.vue';
import SwitchDemo2 from '../demos/switch/SwitchDemo2.vue';
import Demo from '../Demo.vue';
import Attrs from '../Attrs.vue';
import {ref} from 'vue';

export default {
  components: {Attrs, Demo},
  setup() {
    const data = ref([
      {
        params: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      },
    ]);
    return {
      SwitchDemo1,
      SwitchDemo2,
      data
    };
  }
};
</script>