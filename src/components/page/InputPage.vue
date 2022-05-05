<template>
  <h1>Input 组件示例</h1>
  <Demo :component="InputDemoModel" />
  <Demo :component="InputDemoClear" />
  <Demo :component="InputDemoPassword" />
  <Demo :component="InputDemoLength" />
  <Demo :component="InputDemoSize" />
  <Demo :component="InputDemoStatus" />
  <Demo :component="InputDemoHolder" />
  <Demo :component="InputDemoLabel" />
  <Demo :component="InputDemoDisabled" />
  <Demo :component="InputDemoEvent" />
  <Attrs :data="data"/>
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import InputDemoStatus from '../demos/input/InputDemoStatus.vue';
import InputDemoHolder from '../demos/input/InputDemoHolder.vue';
import InputDemoPassword from '../demos/input/InputDemoPassword.vue';
import InputDemoClear from '../demos/input/InputDemoClear.vue';
import InputDemoLength from '../demos/input/InputDemoLength.vue';
import InputDemoSize from '../demos/input/InputDemoSize.vue';
import InputDemoLabel from '../demos/input/InputDemoLabel.vue';
import InputDemoModel from '../demos/input/InputDemoModel.vue';
import InputDemoEvent from '../demos/input/InputDemoEvent.vue';
import InputDemoDisabled from '../demos/input/InputDemoDisabled.vue';
import {ref} from 'vue';
import Attrs from '../Attrs.vue';

export default {
  components: {
    Attrs,
    InputDemoStatus,
    InputDemoDisabled,
    InputDemoEvent,
    InputDemoModel,
    InputDemoLabel, InputDemoSize, InputDemoLength,
    InputDemoClear, InputDemoHolder, Demo, InputDemoPassword,
  },
  setup() {
    const data = ref([
      {
        params: 'clearable',
        desc: '清除输入内容',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      },
      {
        params: 'type',
        desc: '输入类型',
        type: 'string',
        select: 'text  / password',
        default: 'text',
      },
      {
        params: 'maxLength',
        desc: '最大输入长度',
        type: 'number',
        select: '--',
        default: '--',
      },
      {
        params: 'size',
        desc: '输入框大小',
        type: 'string',
        select: 'mini / small / medium / large',
        default: 'medium',
      },
      {
        params: 'status',
        desc: '输入框状态',
        type: 'string',
        select: 'normal / secondary / success / warning / error',
        default: 'normal',
      },
      {
        params: 'placeholer',
        desc: '占位符',
        type: 'string',
        select: '--',
        default: '请输入内容',
      },
      {
        params: 'label / labelRight',
        desc: '输入框左 / 右侧标签',
        type: 'string',
        select: '--',
        default: '--',
      },
      {
        params: 'disabled / readonly',
        desc: '不可用 / 只读',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      },
    ]);
    return {
      Demo,InputDemoHolder,
      InputDemoPassword,
      InputDemoClear,
      InputDemoLength,
      InputDemoSize,
      InputDemoLabel,
      InputDemoModel,
      InputDemoEvent,
      InputDemoDisabled,
      InputDemoStatus,
      data
    }
  }
}
</script>