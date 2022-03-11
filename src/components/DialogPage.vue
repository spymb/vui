<template>
  <h1>Dialog 示例</h1>
  <Demo :component="DialogDemo1" />
  <Demo :component="DialogDemo2" />
  <Attrs :data="data"/>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import DialogDemo1 from './demos/DialogDemo1.vue';
import DialogDemo2 from './demos/DialogDemo2.vue';
import {ref} from 'vue';
import Attrs from './Attrs.vue';

export default {
  components: {Attrs, Demo},
  setup() {
    const data = ref([
      {
        params: 'closeOnClickOverlay',
        desc: '是否点击遮罩层关闭弹出框',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      },
      {
        params: 'ok',
        desc: '确认触发函数',
        type: 'function',
        select: '()=>{}',
        default: '--',
      },
      {
        params: 'cancel',
        desc: '取消触发函数',
        type: 'function',
        select: '()=>{}',
        default: '--',
      },
    ]);
    return {
      DialogDemo1, DialogDemo2, data
    }
  }
}
</script>