<template>
  <div>
    <Switch :value="y" @clickButton=" y = $event "/>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const y = ref(false);
    return {y};
  }
};
</script>