<template>
  <div>
    <Demo :component="ButtonDemo1"/>
    <Demo :component="ButtonDemo2"/>
    <Demo :component="ButtonDemo3"/>
    <Demo :component="ButtonDemo4"/>
    <Demo :component="ButtonDemo5"/>
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import ButtonDemo1 from './demos/ButtonDemo1.vue';
import ButtonDemo2 from './demos/ButtonDemo2.vue';
import ButtonDemo3 from './demos/ButtonDemo3.vue';
import ButtonDemo4 from './demos/ButtonDemo4.vue';
import ButtonDemo5 from './demos/ButtonDemo5.vue';

export default {
  components: {Demo},
  setup() {
    return {
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
      ButtonDemo5
    };
  }
};
</script>