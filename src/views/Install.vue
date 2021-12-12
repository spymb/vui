<template>
  <article v-html="md" class="markdown-body"></article>
</template>

<script lang="ts">
import md from '../markdown/install.md';
export default {
  data() {
    return {
      md
    }
  }
}
</script>