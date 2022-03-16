import { h } from 'vue';

const Header = {
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'header',
        {
          class: 'gulu-header',
          style: { height: props.height },
        },
        slots.default?.(),
      );
  },
};

export default Header;