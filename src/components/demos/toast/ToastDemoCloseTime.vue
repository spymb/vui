<demo>
可设置自动关闭时间
</demo>

<template>
  <Button @click="onClick1">1秒后自动关闭</Button>
  <Button @click="onClick2">2秒后自动关闭</Button>
</template>

<script lang="ts">
import Button from '../../../lib/Button.vue';
import {Toast} from '../../../lib/toast/toast';

export default {
  components: {Button},
  setup() {
    const onClick1 = () => {
      Toast({
        text: '1秒后自动关闭的提示',
        delay: 1,
      });
    };
    const onClick2 = () => {
      Toast({
        text: '2秒后自动关闭的提示',
        delay: 2,
      });
    };

    return { onClick1, onClick2 };
  },
};
</script>