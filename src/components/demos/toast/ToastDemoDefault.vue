<demo>
默认3秒后自动关闭
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
      Toast();
    };
    return { onClick };
  },
};
</script>