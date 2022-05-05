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
        text: `你知道我在等你吗`,
        center: true
      });
    };

    return { onClick };
  },
};
</script>