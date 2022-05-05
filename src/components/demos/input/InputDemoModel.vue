<demo>
支持 v-model
</demo>

<template>
  <Input v-model:value="value"/>
  input value: {{ value }}
</template>

<script lang="ts">
import { ref } from 'vue';
import Input from '../../../lib/Input.vue';

export default {
  components: {Input},
  setup() {
    const value = ref('');
    return { value };
  },
};
</script>