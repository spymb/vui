<demo>
不同状态的提示
</demo>

<template>
  <Button @click="onClick1">normal</Button>
  <Button @click="onClick2">secondary</Button>
  <Button @click="onClick3">success</Button>
  <Button @click="onClick4">warning</Button>
  <Button @click="onClick5">error</Button>
</template>

<script lang="ts">
import Button from '../../../lib/Button.vue';
import {Toast} from '../../../lib/toast/toast';

export default {
  components: {Button},
  setup() {
    const onClick1 = () => {
      Toast({
        text: `这是一条普通提示`,
        type: 'normal',
      });
    };
    const onClick2 = () => {
      Toast({
        text: `这是一条次要提示`,
        type: 'secondary',
      });
    };
    const onClick3 = () => {
      Toast({
        text: `这是一条成功提示`,
        type: 'success',
      });
    };
    const onClick4 = () => {
      Toast({
        text: `这是一条警告提示`,
        type: 'warning',
      });
    };
    const onClick5 = () => {
      Toast({
        text: `这是一条错误提示`,
        type: 'error',
      });
    };
    return { onClick1, onClick2,onClick3,onClick4,onClick5};
  },
};
</script>