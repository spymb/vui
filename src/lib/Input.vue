<template>
  <div
      :class="{ [`gulu-input-wrapper-size-${size}`]: size }"
      class="gulu-input-wrapper"
  >
    <span v-if="label" class="gulu-label left">{{ label }}</span>

    <input
        class="gulu-input"
        :class="classes"
        ref="inputRef"
        v-bind="$attrs"
        :disabled="disabled"
        :maxlength="maxlength"
        :placeholder="placeholder"
        :readonly="readonly"
        :type="type === 'password' ? (passwordVisible ? 'text' : 'password') : type"

        :value="value"
        @input="onInput"
        @change="onChange"
        @focus="onFocus"
        @blur="onBlur"
        @keydown="onKeydown"
    />

    <Icon
        v-if="clearable"
        class="gulu-input-action"
        :style="`transform: translateX(${actionIconTransform}px)`"
        name="close2"
        @click="onClear"
    />
    <Icon
        v-if="type === 'password'"
        class="gulu-input-action"
        :style="`transform: translateX(${actionIconTransform + 24}px)`"
        :name="passwordVisible ? 'see' : 'nosee'"
        @click="onTogglePasswordVisible"
    />

    <span v-if="labelRight" ref="labelRightRef" class="gulu-label right">{{ labelRight }}</span>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { computed, nextTick, ref } from 'vue';
import Icon from '../components/Icon.vue';

type InputStatusType = 'normal' | 'secondary' | 'error' | 'warning' | 'success';
type InputSizeType = 'mini' | 'small' | 'medium' | 'large';
type InputElementEvent = Event & { target: HTMLInputElement };
interface InputProps {
  value: string | number;
  type: string;
  clearable: boolean;
  maxlength: number;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  label: string;
  labelRight: string;
  status: InputStatusType;
  size: InputSizeType;
}

export default {
  components: {Icon},
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    clearable: {
      type: Boolean,
      required: false,
      default: false,
    },
    maxlength: {
      type: Number,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
      default: '请输入内容'
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    labelRight: {
      type: String,
      required: false,
    },
    status: {
      type: String as PropType<InputStatusType>,
      required: false,
      default: 'normal',
      validator: (val: string) => {
        return ['normal', 'secondary', 'success', 'warning', 'error'].includes(val);
      },
    },
    size: {
      type: String as PropType<InputSizeType>,
      required: false,
      default: 'medium',
      validator: (val: string) => {
        return ['mini', 'small', 'medium', 'large'].includes(val);
      },
    },
  },
  emits: ['update:value', 'input', 'change', 'blur', 'focus', 'keydown', 'clear'],

  setup(props: InputProps, { emit }) {
    const inputRef = ref<HTMLInputElement>(null);
    const passwordVisible = ref(false);
    const labelRightRef = ref<HTMLSpanElement>(null);
    const classes = computed(() => ({
      'gulu-input-label-left': props.label,
      'gulu-input-label-right': props.labelRight,
      'gulu-input-suffix-clear': props.clearable,
      'gulu-input-suffix-password': props.type === 'password',
      [`gulu-input-status-${props.status}`]: props.status,
    }));
    const actionIconTransform = computed(() => {
      const labelRightOffsetWidth = labelRightRef.value ? labelRightRef.value.offsetWidth : 0;
      const passwordIconOffsetWidth = props.type === 'password' ? 24 : 0;
      return -labelRightOffsetWidth - passwordIconOffsetWidth;
    });

    const onClear = () => {
      emit('update:value', '');
      emit('change', '');
      emit('clear');
      focus();
    };
    const onTogglePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const focus = () => {
      nextTick(() => {
        inputRef.value.focus();
      });
    };
    const onInput = (event: InputElementEvent) => {
      emit('update:value', event.target.value);
      emit('input', event.target.value);
    };
    const onChange = (event: InputElementEvent) => {
      emit('change', event.target.value);
    };
    const onBlur = (event: InputElementEvent) => {
      emit('blur', event);
    };
    const onFocus = (event: InputElementEvent) => {
      emit('focus', event);
    };
    const onKeydown = (event: KeyboardEvent) => {
      emit('keydown', event);
    };

    return {
      classes,
      onClear,
      onInput,
      onChange,
      onBlur,
      onFocus,
      onKeydown,
      onTogglePasswordVisible,
      inputRef,
      labelRightRef,
      actionIconTransform,
      passwordVisible,
    };
  },
};
</script>

<style scoped lang="scss">
$borderColorGray: #d9d9d9;
$borderColorFocus: #666667;
$theme: #000;
$disabledColor: #757575;
$placeholderColor: #757575;
$colorGray: #666;
$colorDark: #333;
$colorBlack: #000;
$selectionBGColor: #6affe0;
$disabledBGColor: #fafafa;
$checkedBGColor: #409eff;

$warning: #f69d32;
$secondary: #5b5b5b;
$error: #f01217;
$alert: #ff0f74;
$success: #0062ec;
$purple: #fc18dc;
$violet: #701fbe;
$cyan: #39dfbb;

$fontSize: 14px;
$height: 36px;

.gulu-input-wrapper {
  font-size: $fontSize;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  flex: 1 1 0;
  user-select: none;
  margin: 4px;
  height: $height;
  position: relative;

  .gulu-input-action {
    right: 5px;
    display: block;
    position: absolute;
    cursor: pointer;
    height: 100%;
    width: 22px;

    &:hover {
      color: $colorBlack;
    }
  }

  .gulu-label {
    width: auto;
    height: $height;
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    padding: 0 8px;
    font-size: inherit;
    background-color: #fafafa;
    color: #888;
    border-top: 1px solid $borderColorGray;
    border-bottom: 1px solid $borderColorGray;

    &.left {
      border-left: 1px solid $borderColorGray;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &.right {
      border-right: 1px solid $borderColorGray;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  &.gulu-input-wrapper-size-mini {
    font-size: 12px;
    height: 28px;
  }

  &.gulu-input-wrapper-size-small {
    font-size: 12px;
    height: 32px;
  }

  &.gulu-input-wrapper-size-large {
    font-size: 16px;
    height: 40px;
  }

  .gulu-input {
    font-family: inherit;
    font-weight: 400;
    border-radius: 5px;
    font-size: inherit;
    padding: 4px 10px;
    background-color: transparent;
    outline: none;
    height: inherit;
    width: 100%;
    min-width: 0;
    color: $colorBlack;
    border: 1px solid $borderColorGray;
    transition: border 0.2s ease 0s, color 0.2s ease 0s;

    &.gulu-input-suffix-clear,
    &.gulu-input-suffix-password {
      padding-right: 35px;
    }

    &.gulu-input-suffix-clear.gulu-input-suffix-password {
      padding-right: 55px;
    }

    &.gulu-input-status-secondary {
      border-color: $theme;

      &:focus {
        border-color: $colorGray;
      }
    }

    &.gulu-input-status-warning {
      border-color: $warning;

      &:focus {
        border-color: darken($warning, 15%);
      }
    }

    &.gulu-input-status-error {
      color: $error;
      border-color: $error;

      &:focus {
        border-color: darken($error, 15%);
      }
    }

    &.gulu-input-status-success {
      border-color: $success;

      &:focus {
        border-color: darken($success, 15%);
      }
    }

    &.gulu-input-label-left {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &.gulu-input-label-right {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &::selection {
      background-color: $selectionBGColor;
      color: $colorBlack;
    }

    &::-moz-selection {
      background: $selectionBGColor;
      color: $colorBlack;
    }

    &::placeholder {
      color: $placeholderColor;
    }

    &:focus {
      border-color: $borderColorFocus;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: $disabledBGColor;
      color: $disabledColor;
    }
  }
}
</style>