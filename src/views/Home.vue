<template>
  <div>
    <TopNav/>
    <div class="banner">
      <h1>UI</h1>
      <h2>一个UI 框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
  components: {TopNav}
}
</script>