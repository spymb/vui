<demo>
不同等级的提示
</demo>

<template>
  <Button @click="onClick1">普通 normal</Button>
  <Button @click="onClick2">次级 secondary</Button>
  <Button @click="onClick3">成功 success</Button>
  <Button @click="onClick4">警告 warning</Button>
  <Button @click="onClick5">错误 error</Button>
</template>

<script lang="ts">
import Button from '../../../lib/Button.vue';
import {Toast} from '../../../lib/toast/toast';

export default {
  components: {Button},
  setup() {
    const onClick1 = () => {
      Toast({
        text: `这是一条普通的提示~`,
        center: true,
        type: 'normal',
      });
    };
    const onClick2 = () => {
      Toast({
        text: `这是一条次要的提示~`,
        center: true,
        type: 'secondary',
      });
    };
    const onClick3 = () => {
      Toast({
        text: `这是一条成功的提示~`,
        center: true,
        type: 'success',
      });
    };
    const onClick4 = () => {
      Toast({
        text: `这是一条警告的提示~`,
        center: true,
        type: 'warning',
      });
    };
    const onClick5 = () => {
      Toast({
        text: `这是一条错误的提示~`,
        center: true,
        type: 'error',
      });
    };
    return { onClick1, onClick2,onClick3,onClick4,onClick5};
  },
};
</script>