<demo>
支持 disabled 和 readonly
</demo>

<template>
  <Input value="disabled" disabled />
  <br/>
  <Input value="readonly" readonly />
</template>

<script lang="ts">
import Input from '../../../lib/Input.vue';

export default {
  components: {Input},
};
</script>