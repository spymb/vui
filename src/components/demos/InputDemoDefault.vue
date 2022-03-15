<demo>
默认用法
</demo>

<template>
  <Input v-model:value="value" placeholder="请输入"/>
</template>

<script lang="ts">
import Input from '../../lib/Input.vue';
export default {
  components: {Input,},
  setup() {
    const value = '';
    return { value };
  },
}
</script>