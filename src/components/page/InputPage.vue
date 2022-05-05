<template>
  <h1>Input 示例</h1>
  <Demo :component="InputDemoDefault" />
  <Demo :component="InputDemoPassword" />
  <Demo :component="InputDemoClear" />
  <Demo :component="InputDemoLength" />
  <Demo :component="InputDemoSize" />
  <Demo :component="InputDemoLabel" />
  <Demo :component="InputDemoModel" />
  <Demo :component="InputDemoEvent" />
  <Demo :component="InputDemoDisabled" />
</template>

<script lang="ts">
import Demo from '../Demo.vue';
import InputDemoDefault from '../demos/input/InputDemoDefault.vue';
import InputDemoPassword from '../demos/input/InputDemoPassword.vue';
import InputDemoClear from '../demos/input/InputDemoClear.vue';
import InputDemoLength from '../demos/input/InputDemoLength.vue';
import InputDemoSize from '../demos/input/InputDemoSize.vue';
import InputDemoLabel from '../demos/input/InputDemoLabel.vue';
import InputDemoModel from '../demos/input/InputDemoModel.vue';
import InputDemoEvent from '../demos/input/InputDemoEvent.vue';
import InputDemoDisabled from '../demos/input/InputDemoDisabled.vue';

export default {
  components: {
    InputDemoDisabled,
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
      InputDemoEvent,
      InputDemoDisabled
    }
  }
}
</script>