<template>
  <div>
    button
    <span>
      <Button>b1</Button>
      <Button theme="button">b2</Button>
      <Button theme="link">b3</Button>
      <Button theme="text">b4</Button>
    </span>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button}
};
</script>