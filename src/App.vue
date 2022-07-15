<template>
  <router-view/>
</template>

<script lang="ts">
import {onMounted, onUnmounted, provide, ref} from 'vue';
import {router} from './router';

export default {
  name: 'App',
  setup() {
    const asideVisible = ref(window.innerWidth > 500);
    provide('asideVisible', asideVisible);
    router.afterEach(() => {
      if (window.innerWidth <= 500) {
        asideVisible.value = false;
      }
    });

    const onResize = () => {
      asideVisible.value = window.innerWidth > 500;
    };
    onMounted(() => window.addEventListener('resize', onResize));
    onUnmounted(() => window.removeEventListener('resize', onResize));
  }
};
</script>
