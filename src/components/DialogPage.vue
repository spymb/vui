<template>
  <div style="position: relative; z-index: 1;">
    <Button @click="toggle">显示对话框</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false"
            :ok="f1" :cancel="f2">
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
      <template v-slot:content>
        <strong>加粗的第一行</strong>
        <div>未加粗的第二行</div>
      </template>
    </Dialog>
  </div>
  <div style="position: relative; z-index: 2;
  width: 300px; height: 300px; background: red;"></div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {
    };
    return {
      x, toggle, f1, f2
    };
  }
};
</script>