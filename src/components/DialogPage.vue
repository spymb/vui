<template>
  <div >
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
    <Button @click="showDialog">showDialog</Button>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {h, ref} from 'vue';
import {openDialog} from '../lib/openDialog';

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
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok');
          },
        cancel() {
          console.log('cancel');
        },
      })
    }
    return {
      x, toggle, f1, f2, showDialog
    };
  }
};
</script>