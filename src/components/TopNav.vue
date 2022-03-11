<template>
  <div class="topNav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-lunzi"></use>
      </svg>
    </router-link>
    <svg v-if="togglerVisible" class="toggler" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
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
$color: #307a04;

.topNav {
  color: $color;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 32px;
      height: 32px;
    }
  }

  > .toggler {
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggler {
      display: inline-block;
    }
  }


}
</style>