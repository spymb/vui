import { h } from 'vue';

const Content = {
  setup(props, { slots }) {
    return () => h('main', { class: 'gulu-content' }, slots.default?.());
  },
};

export default Content;