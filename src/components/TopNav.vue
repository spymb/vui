<template>
  <div class="topNav">
    <div class="logo" >LOGO</div>
    <span class="toggler" @click="toggleAside"></span>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
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
  position: relative;
  z-index: 10;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .toggler {
    display: none;
    width: 24px;
    height: 24px;
    background: red;
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