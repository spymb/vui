import { h } from 'vue';

const Footer = {
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'footer',
        {
          class: 'gulu-footer',
          style: { height: props.height },
        },
        slots.default?.(),
      );
  },
};

export default Footer;