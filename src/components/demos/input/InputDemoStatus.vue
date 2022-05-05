<demo>
支持 status
</demo>

<template>
  <Input v-model:value="value" placeholder="normal" status="normal"/>
  <br/>
  <Input v-model:value="value" placeholder="secondary" status="secondary"/>
  <br/>
  <Input v-model:value="value" placeholder="success" status="success"/>
  <br/>
  <Input v-model:value="value" placeholder="warning" status="warning"/>
  <br/>
  <Input v-model:value="value" placeholder="error" status="error"/>
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