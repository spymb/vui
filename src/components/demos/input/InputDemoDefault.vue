<demo>
常规用法
</demo>

<template>
  <Input v-model:value="value"/>
</template>

<script lang="ts">
import Input from '../../../lib/Input.vue';

export default {
  components: {Input},
  setup() {
    const value = '';
    return {value};
  },
};
</script>