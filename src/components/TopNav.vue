<template>
  <div class="topNav">
    <span class="toggler">
      <svg v-if="togglerVisible" @click="toggleAside">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>

    <router-link to="/" class="lng">
      <svg class="icon">
        <use xlink:href="#icon-lunzi"></use>
      </svg>
    </router-link>

    <a href="https://github.com/spymb/vui" class="lng">
      <svg class="icon">
        <use xlink:href="#icon-github"></use>
      </svg>
    </a>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props: {
    togglerVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = function () {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleAside};
  }
};
</script>

<style lang="scss" scoped>
.topNav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;

  .lng{
    > svg {
      width: 32px;
      height: 32px;
    }
  }

  > .toggler {
    display: none;
  }

  @media (max-width: 500px) {
    > .toggler {
      display: inline-block;
      > svg {
        width: 32px;
        height: 32px;
      }
    }
  }
}
</style>