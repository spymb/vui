<template>
  <article v-html="content" class="markdown-body"></article>
</template>

<script lang="ts">

export default {
  props: {
    content: {
      type: String,
      require: true,
    }
  }
};
</script>