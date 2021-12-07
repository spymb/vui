<template>
  <div>
    <h1>theme demo</h1>
    <div>
      <Button>b1</Button>
      <Button theme="link">b2</Button>
      <Button theme="text">b3</Button>
    </div>
    <h1>size demo</h1>
    <div>
      <Button size="big">s1</Button>
      <Button>s2</Button>
      <Button size="small">s3</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button}
};
</script>