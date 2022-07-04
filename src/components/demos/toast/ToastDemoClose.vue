<demo>
可手动关闭
</demo>

<template>
  <Button @click="onClick1">可手动关闭的提示</Button>
  <Button @click="onClick2">只可手动关闭的提示</Button>
</template>

<script lang="ts">
import Button from '../../../lib/Button.vue';
import {Toast} from '../../../lib/toast/toast';

export default {
  components: {Button},
  setup() {
    const onClick1 = () => {
      Toast({
        text: '可手动关闭的提示',
        showClose: true
      });
    };
    const onClick2 = () => {
      Toast({
        text: '只可手动关闭的提示',
        showClose: true,
        delay: 0
      });
    };

    return { onClick1, onClick2};
  },
};
</script>