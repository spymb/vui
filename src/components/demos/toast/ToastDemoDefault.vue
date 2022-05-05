<demo>
常规使用
从顶部出现，3秒后消失
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
    let index = 1;
    const onClick = () => {
      Toast({
        text: `这是第 ${index++} 条消息提示~`,
        center: true
      });
    };

    return { onClick };
  },
};
</script>