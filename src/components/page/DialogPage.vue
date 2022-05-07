<template>
  <h1>Dialog 用法示例</h1>
  <Demo :component="DialogDemo1" />
  <Demo :component="DialogDemo2" />
  <Demo :component="DialogDemo3" />
  <Demo :component="DialogDemo4" />
  <Attrs :data="data"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import DialogDemo1 from '../demos/dialog/DialogDemo1.vue';
import DialogDemo2 from '../demos/dialog/DialogDemo2.vue';
import DialogDemo3 from '../demos/dialog/DialogDemo3.vue';
import DialogDemo4 from '../demos/dialog/DialogDemo4.vue';
import {ref} from 'vue';
import Attrs from '../Attrs.vue';

export default {
  components: {Attrs, Demo},
  setup() {
    const data = ref([
      {
        params: 'closeOnClickOverlay',
        desc: '是否点击遮罩层关闭对话框',
        type: 'boolean',
        select: 'true / false',
        default: 'true',
      },
      {
        params: 'confirm',
        desc: '点击确认触发函数',
        type: 'function',
        select: '()=>{}',
        default: '--',
      },
      {
        params: 'cancel',
        desc: '点击取消触发函数',
        type: 'function',
        select: '()=>{}',
        default: '--',
      },
    ]);
    return {
      DialogDemo1, DialogDemo2, DialogDemo3, DialogDemo4, data
    }
  }
}
</script>