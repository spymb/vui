import {defineComponent, h} from 'vue';

const Aside = defineComponent({
  name: 'Aside',
  props: {
    width: {
      type: String,
      default: '300px',
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'aside',
        {
          class: 'gulu-aside',
          style: { width: props.width },
        },
        slots.default?.(),
      );
  },
})

export default Aside;