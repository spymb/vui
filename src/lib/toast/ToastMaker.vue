<template>
  <div
      v-show="visible"
      :class="classes"
      :style="{ top: `${top}px` }"
  >
    <span>{{ text }}</span>

    <Icon name="close2" class="icon gulu-toast-close"
          v-if="showClose" @click="handleClose"/>
  </div>
</template>

<script lang="ts">
import type {PropType} from 'vue';
import {computed, onMounted, ref} from 'vue';
import {ToastProps, ToastType} from './toast.d';
import Icon from '../../components/Icon.vue';

export default {
  components: {Icon},
  props: {
    text: {
      type: String,
      required: false,
      default: '你知道我在等你吗',
    },
    type: {
      type: String as PropType<ToastType>,
      required: false,
      default: 'normal',
      validator: (val: string) =>
          ['normal', 'secondary', 'success', 'warning', 'error'].includes(val),
    },
    delay: {
      type: Number,
      required: false,
      default: 3,
    },
    showClose: {
      type: Boolean,
      required: false,
      default: false,
    },
    id: {
      type: String,
      required: false,
      default: '',
    },
    top: {
      type: Number,
      default: 10,
      required: false,
    },
  },
  emits: ['destroy'],

  setup(props: ToastProps, {emit}) {
    const visible = ref(false);

    onMounted(() => {
      visible.value = true;
      close();
    });

    const close = () => {
      if (props.delay > 0) {
        setTimeout(() => {
          handleClose();
        }, props.delay * 1000);
      }
    };

    const handleClose = () => {
      visible.value = false;
      emit('destroy');
    };

    const classes = computed(() => [
      'gulu-toast',
      {
        'gulu-toast-left': props.showClose,
        [`gulu-toast-${props.type}`]: props.type,
      },
    ]);

    return {visible, classes, handleClose, close};
  },
};
</script>

<style scoped lang="scss">
$warning: #f69d32;
$secondary: #5b5b5b;
$error: #f01217;
$success: #0062ec;

.gulu-toast {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  min-width: 250px;
  border-radius: 5px;
  background: #fff;
  color: #000;
  z-index: 100;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  padding: 10px 15px;
  transition: top 0.3s;
  text-align: center;

  > .gulu-toast-close {
    margin-left: 50px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
    color: #c0c4cc;
    font-size: 20px;

    &:hover {
      color: #909399;
    }
  }

  &-left {
    text-align: left;
  }

  &-secondary {
    background-color: $secondary;
    color: #fff;
  }
  &-success {
    background-color: $success;
    color: #fff;
  }

  &-warning {
    background-color: $warning;
    color: #fff;
  }

  &-error {
    background-color: $error;
    color: #fff;
  }
}
</style>

