<demo>
支持 confirm 和 cancel
</demo>

<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="x" :confirm="f1" :cancel="f2">
      <template v-slot:title>
        <strong>confirm 和 cancel</strong>
      </template>
      <template v-slot:content>
        <div>1. 点击确认和取消会分别触发 confirm 和 cancel 函数</div>
        <div>2. 当返回值为 false 时，不会关闭对话框</div>
        <div>3. 此处点击确认不会关闭对话框</div>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import {
  ref
} from 'vue';

export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {return false;};
    const f2 = () => {};
    return {
      x,
      toggle,
      f1,
      f2
    };
  }
};
</script>