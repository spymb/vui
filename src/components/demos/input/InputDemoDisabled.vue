<demo>
禁止输入
</demo>

<template>
  <div><Input value="disabled" disabled /></div>
  <div><Input value="readonly" readonly /></div>
</template>

<script lang="ts">
import Input from '../../../lib/Input.vue';

export default {
  components: {Input},
};
</script>