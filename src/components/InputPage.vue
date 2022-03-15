<template>
  <h1>Input 示例</h1>
  <Demo :component="InputDemoDefault" />
  <Demo :component="InputDemoPassword" />
  <Demo :component="InputDemoClear" />
  <Demo :component="InputDemoLength" />
  <Demo :component="InputDemoSize" />
  <Demo :component="InputDemoLabel" />
  <Demo :component="InputDemoLabel" />
  <Demo :component="InputDemoModel" />
  <Demo :component="InputDemoEvent" />
</template>

<script lang="ts">
import Demo from './Demo.vue';
import InputDemoDefault from './demos/InputDemoDefault.vue';
import InputDemoPassword from './demos/InputDemoPassword.vue';
import InputDemoClear from './demos/InputDemoClear.vue';
import InputDemoLength from './demos/InputDemoLength.vue';
import InputDemoSize from './demos/InputDemoSize.vue';
import InputDemoLabel from './demos/InputDemoLabel.vue';
import InputDemoModel from './demos/InputDemoModel.vue';
import InputDemoEvent from './demos/InputDemoEvent.vue';

export default {
  components: {
    InputDemoEvent,
    InputDemoModel,
    InputDemoLabel, InputDemoSize, InputDemoLength,
    InputDemoClear, InputDemoDefault, Demo, InputDemoPassword},
  setup() {
    return {
      Demo,InputDemoDefault,
      InputDemoPassword,
      InputDemoClear,
      InputDemoLength,
      InputDemoSize,
      InputDemoLabel,
      InputDemoModel,
      InputDemoEvent
    }
  }
}
</script>