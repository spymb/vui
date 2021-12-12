<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="SwitchDemo1"/>
    <Demo :component="SwitchDemo2"/>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import SwitchDemo1 from './SwitchDemo1.vue';
import SwitchDemo2 from './SwitchDemo2.vue';
import 'prismjs';
import 'prismjs/themes/prism.css'
import Demo from './Demo.vue';

const Prism = (window as any).Prism

export default {
  components: {Demo, Button},
  setup() {
    const bool = ref(false);
    return {
      bool,
      SwitchDemo1,
      SwitchDemo2,
      Prism
    };
  }
};
</script>