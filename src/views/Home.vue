<template>
  <div class="layout">
    <TopNav/>
    <div class="banner">
      <h1>VUI</h1>
      <h2>一个极简的UI 框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>

  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-smile"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import Icon from '../components/Icon.vue';

export default {
  components: {Icon, TopNav}
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;

.layout {
  display: flex;
  flex-direction: column;
  background: linear-gradient(145deg, #dbe5c6 0%, #90d368 100%);
  clip-path: ellipse(80% 60% at 50% 40%);

  > .banner {
    color: #307a04;
    flex-grow: 1;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > .actions {
      padding: 8px 0;

      a {
        margin: 0 8px;
        background: #307a04;
        color: white;
        display: inline-block;
        padding: 8px 24px;
        border-radius: $border-radius;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}

.features {
  margin: 64px auto;
  width: 400px;

  @media (min-width: 800px) {
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: center;
      align-content: center;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text
      }
    }
  }
}
</style>