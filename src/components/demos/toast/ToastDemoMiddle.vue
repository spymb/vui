<demo>
文本居中
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
        text: `这条提示文本居中`,
        center: true
      });
    };

    return { onClick };
  },
};
</script>