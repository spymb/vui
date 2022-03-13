<demo>
可关闭
</demo>

<template>
  <Button @click="onClick1">可关闭，delay: 5</Button>
  <Button @click="onClick2">可关闭，delay: 0</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import {Toast} from '../../lib/toast/toast';

export default {
  components: {Button},
  setup() {
    const onClick1 = () => {
      Toast({
        text: '这是一条可以关闭的提示~',
        showClose: true,
        delay: 5,
      });
    };
    const onClick2 = () => {
      Toast({
        text: '这是一条可以关闭的提示~',
        showClose: true,
        delay: 0,
      });
    };

    return { onClick1, onClick2 };
  },
};
</script>