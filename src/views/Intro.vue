<template>
  <article v-html="md"></article>
</template>

<script lang="ts">
import md from '../markdown/intro.md';
export default {
  data() {
    return {
      md
    }
  }
}
</script>