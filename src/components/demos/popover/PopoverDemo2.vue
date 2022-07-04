<demo>悬浮触发</demo>

<template>
  <Popover trigger="hover">
    <template v-slot:content>
      弹出内容
    </template>
    <Button>上方弹出</Button>
  </Popover>

  <Popover position="bottom" trigger="hover">
    <template v-slot:content>
      弹出内容
    </template>
    <Button>下方弹出</Button>
  </Popover>

  <Popover position="left" trigger="hover">
    <template v-slot:content>
      弹出内容
    </template>
    <Button>左侧弹出</Button>
  </Popover>

  <Popover position="right" trigger="hover">
    <template v-slot:content>
      弹出内容
    </template>
    <Button>右侧弹出</Button>
  </Popover>
</template>

<script lang="ts">
import Popover from '../../../lib/Popover.vue';
import Button from '../../../lib/Button.vue';

export default {
  components: { Button, Popover }
};
</script>