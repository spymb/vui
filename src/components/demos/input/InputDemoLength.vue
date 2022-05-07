<demo>
支持 maxLength
</demo>

<template>
  <Input v-model:value="value" :maxlength="5" placeholder="此处最大输入长度为5"/>
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