<demo>
支持 clearable
</demo>

<template>
  <Input v-model:value="value" clearable/>
</template>

<script lang="ts">
import Input from '../../lib/Input.vue';
import { ref } from 'vue';

export default {
  components: {Input},
  setup() {
    const value = ref('');
    return { value };
  },
};
</script>