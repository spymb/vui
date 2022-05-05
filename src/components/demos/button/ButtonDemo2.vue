<demo>
支持 size
</demo>

<template>
  <div>
    <div>
      <Button size="small">中杯</Button>
      <Button>大杯</Button>
      <Button size="big">超大杯</Button>
    </div>
    <div>
      <Button size="small" theme="link">中杯</Button>
      <Button theme="link">大杯</Button>
      <Button size="big" theme="link">超大杯</Button>
    </div>
    <div>
      <Button size="small" theme="text">中杯</Button>
      <Button theme="text">大杯</Button>
      <Button size="big" theme="text">超大杯</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../../../lib/Button.vue';

export default {
  components: {
    Button
  }
};
</script>