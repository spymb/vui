<demo>
支持 size
</demo>

<template>
  <Input v-model:value="value" placeholder="mini input" size="mini"/>
  <br/>
  <Input v-model:value="value" placeholder="small input" size="small"/>
  <br/>
  <Input v-model:value="value" placeholder="medium input" size="medium"/>
  <br/>
  <Input v-model:value="value" placeholder="large input" size="large"/>
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