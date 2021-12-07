<template>
  <div>
    <Button @click="toggle">显示对话框</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false"
            :ok="f1" :cancel="f2"/>
  </div>
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