<template>
  <div class="demo">

    <h3>{{ component.__sourceCodeTitle }}</h3>

    <div class="demo-component">
      <component :is="component"/>
    </div>

    <div class="demo-actions">
      <Button @click="toggleCode">
        {{ codeVisible === true ? '隐藏代码' : '显示代码' }}
      </Button>
    </div>

    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"/>
    </div>

  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
import {computed, ref} from 'vue';

const Prism = (window as any).Prism;

export default {
  components: {Button},
  props: {
    component: Object
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
    });
    const toggleCode = () => codeVisible.value = !codeVisible.value;
    const codeVisible = ref(false);
    return {
      Prism, html, toggleCode, codeVisible
    };
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h3 {
    padding: 8px 10px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 10px;
  }

  &-actions {
    padding: 8px 8px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 8px;
    border-top: 1px dashed #f5f5f5;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>