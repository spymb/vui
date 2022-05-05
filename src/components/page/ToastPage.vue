<template>
  <h1>Toast 组件示例</h1>
  <Demo :component="ToastDemoDefault" />
  <Demo :component="ToastDemoCloseTime" />
  <Demo :component="ToastDemoClose" />
  <Demo :component="ToastDemoMiddle" />
  <Demo :component="ToastDemoText" />
  <Demo :component="ToastDemoLevel" />
  <Attrs :data="data"/>
</template>

<script lang="ts">
import Attrs from '../Attrs.vue';
import ToastDemoDefault from '../demos/toast/ToastDemoDefault.vue';
import ToastDemoLevel from '../demos/toast/ToastDemoLevel.vue';
import ToastDemoClose from '../demos/toast/ToastDemoClose.vue';
import ToastDemoCloseTime from '../demos/toast/ToastDemoCloseTime.vue';
import ToastDemoMiddle from '../demos/toast/ToastDemoMiddle.vue';
import ToastDemoText from '../demos/toast/ToastDemoText.vue';
import Demo from '../Demo.vue';
import {ref} from 'vue';

export default {
  components: {ToastDemoDefault, Demo, ToastDemoLevel, ToastDemoClose,
    ToastDemoCloseTime, ToastDemoMiddle, ToastDemoText, Attrs
  },
  setup() {
    const data = ref([
      {
        params: 'text',
        desc: '文本内容',
        type: 'string',
        select: '--',
        default: '--',
      },
      {
        params: 'center',
        desc: '文本内容居中',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      },
      {
        params: 'delay',
        desc: '自动关闭的秒数',
        type: 'number',
        select: '--',
        default: '3',
      },
      {
        params: 'showClose',
        desc: '是否手动关闭',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      },
      {
        params: 'type',
        desc: '不同状态的提示',
        type: 'string',
        select: 'normal / secondary / success / warning / error',
        default: 'normal',
      },
    ]);

    return {
      ToastDemoDefault,
      ToastDemoLevel,
      ToastDemoClose,
      ToastDemoCloseTime,
      ToastDemoMiddle,
      ToastDemoText,
      Attrs, data
    }
  }
}
</script>