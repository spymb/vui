import { Component, computed, h, VNode } from 'vue';

const Layout = {
  setup(props, { slots }) {
    const isHasAside = computed(() => {
      if (slots?.default) {
        const children: Array<VNode> = slots.default();
        return children.some(child => {
          return (child.type as Component).name === 'Aside';
        });
      } else {
        return false;
      }
    });

    return () =>
      h(
        'section',
        { class: ['gulu-layout', { 'gulu-layout-has-aside': isHasAside.value }] },
        slots.default?.(),
      );
  },
};

export default Layout;