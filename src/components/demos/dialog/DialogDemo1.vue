<demo>
常规用法
</demo>

<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="x">
      <template v-slot:title>
        <strong>标题</strong>
      </template>
      <template v-slot:content>
        <div>内容</div>
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