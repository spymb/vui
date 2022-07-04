<demo>
自定义文本
</demo>

<template>
  <Button @click="onClick">打开 toast</Button>
</template>

<script lang="ts">
import Button from '../../../lib/Button.vue';
import {Toast} from '../../../lib/toast/toast';

export default {
  components: {Button},
  setup() {
    const onClick = () => {
      Toast({
        text: `你如果真的在乎我`
      });
    };
    return { onClick };
  },
};
</script>