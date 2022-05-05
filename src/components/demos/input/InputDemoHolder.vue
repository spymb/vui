<demo>
支持 placeholder
</demo>

<template>
  <Input v-model:value="value" placeholder="我是 placehoder"/>
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