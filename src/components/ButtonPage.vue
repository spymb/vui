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
      <div>
        <Button size="big">大</Button>
        <Button>中</Button>
        <Button size="small">小</Button>
      </div>
      <div>
        <Button theme="link" size="big">大</Button>
        <Button theme="link">中</Button>
        <Button size="small" theme="link">小</Button>
      </div>
      <div>
        <Button size="big" theme="text">大</Button>
        <Button theme="text">中</Button>
        <Button size="small" theme="text">小</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button}
};
</script>