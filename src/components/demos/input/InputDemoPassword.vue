<demo>支持 password</demo>

<template>
  <Input v-model:value="value" type="password" />
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