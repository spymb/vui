<template>
  <div>
    <Tabs v-model:selected="title">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航222222">内容2</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import {ref} from 'vue';

export default {
  components: {Tab, Tabs},
  setup() {
    const title = ref('导航1')
    return {
      title
    }
  }
};
</script>