<demo>
支持 closeOnClickOverlay
</demo>

<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false">
      <template v-slot:title>
        <strong>closeOnClickOverlay</strong>
      </template>
      <template v-slot:content>
        <div>1. 默认 closeOnClickOverlay 为 true</div>
        <div>2. 设置为 false 时点击遮罩层不会关闭对话框</div>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../../../lib/dialog/Dialog.vue';
import Button from '../../../lib/Button.vue';
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
    return {
      x, toggle
    };
  }
};
</script>