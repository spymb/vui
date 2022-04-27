<demo>
支持 level
</demo>

<template>
  <div>
    <div>
      <Button>普通默认按钮</Button>
      <Button level="main">主要默认按钮</Button>
      <Button level="warning">警告默认按钮</Button>
      <Button level="danger">危险默认按钮</Button>
    </div>
    <div>
      <Button theme="link">普通链接按钮</Button>
      <Button level="main" theme="link">主要链接按钮</Button>
      <Button level="warning" theme="link">警告链接按钮</Button>
      <Button level="danger" theme="link">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text">普通文字按钮</Button>
      <Button level="main" theme="text">主要文字按钮</Button>
      <Button level="warning" theme="text">警告文字按钮</Button>
      <Button level="danger" theme="text">危险文字按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
  components: {
    Button
  }
};
</script>