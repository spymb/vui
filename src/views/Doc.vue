<template>
  <div class="layout">
    <TopNav toggler-visible class="nav"/>
    <div class="content">
      <transition name="slide">
        <aside v-if="asideVisible">
          <h2 class="docTitle">文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">简介</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/button">Button</router-link>
            </li>
            <li>
              <router-link to="/doc/switch">Switch</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs</router-link>
            </li>
            <li>
              <router-link to="/doc/input">Input</router-link>
            </li>
            <li>
              <router-link to="/doc/layout">Layout</router-link>
            </li>
            <li>
              <router-link to="/doc/popover">Popover</router-link>
            </li>
            <li class="lastLi">
              <router-link to="/doc/toast">Toast</router-link>
            </li>
          </ol>
        </aside>
      </transition>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {TopNav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible};
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
    background: white;
    box-shadow: rgb(0 0 0 / 10%) 0 0 15px 0;
  }

  > .content {
    display: flex;
    flex-grow: 1;
    padding-top: 55px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }

    .slide-enter-active,
    .slide-leave-active {
      transition: all .25s linear;
    }
    .slide-enter-from,
    .slide-leave-to {
      transform: translateX(-285px);
    }

    > aside {
      transition: all 0.25s;
      position: fixed;
      flex-shrink: 0;
      background: #a6d883;
      box-shadow: rgb(0 0 0 / 10%) 0 0 15px 0;
      left: 0;
      height: 100%;
      width: 150px;

      z-index: 10;

      > .docTitle {
        margin-top: 10px;
      }

      > h2 {
        font-weight: bold;
        margin-bottom: 4px;
        margin-top: 4px;
        padding: 0 16px;
      }

      > ol {
        > li {
          > a {
            font-size: 18px;
            display: block;
            padding: 5px 16px;
            text-decoration: none;
          }

          .router-link-active {
            background: white;
          }
        }
      }
    }

    > main {
      overflow: auto;
      flex-grow: 1;
      padding: 16px;
    }
  }
}
</style>
