<template>
  <div>Dialog 示例</div>
  <Demo :component="DialogDemo1" />
  <Demo :component="DialogDemo2" />
</template>

<script lang="ts">
import Demo from './Demo.vue';
import DialogDemo1 from './demos/DialogDemo1.vue';
import DialogDemo2 from './demos/DialogDemo2.vue';

export default {
  components: {Demo},
  setup() {
    return {
      DialogDemo1, DialogDemo2
    }
  }
}
</script>