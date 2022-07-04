<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
         :class="{[`position-${position}`]:true}">
      <slot name="content" />
    </div>

    <span ref="triggerWrapper" style="display: inline-block;">
      <slot/>
    </span>
  </div>
</template>

<script lang="ts">
import {nextTick, onBeforeUnmount, onMounted, ref} from 'vue';

export default {
  props: {
    position: {
      type: String,
      default: 'top',
      validator: (value) => {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator: (value) => {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  setup(props) {
    const {trigger, position} = props
    const popover = ref<HTMLDivElement>(null);
    const contentWrapper = ref<HTMLDivElement>(null);
    const triggerWrapper = ref<HTMLDivElement>(null);
    const visible = ref(false);

    onMounted(() => {
      if (trigger === 'click') {
        popover.value.addEventListener('click', onClick)
      } else {
        popover.value.addEventListener('mouseenter', open)
        popover.value.addEventListener('mouseleave', close)
      }
    })
    onBeforeUnmount(() => {
      if (trigger === 'click') {
        popover.value.removeEventListener('click', onClick)
      } else {
        popover.value.removeEventListener('mouseenter', open)
        popover.value.removeEventListener('mouseleave', close)
      }
    })

    const onClick = (event) => {
      if (triggerWrapper.value.contains(event.target)) {
        visible.value === true ? close() : open()
      }
    }
    const open = () => {
      visible.value = true
      nextTick(() => {
        positionContent()
        document.addEventListener('click', onClickDocument)
      })
    }
    const close = () => {
      visible.value = false
      document.removeEventListener('click', onClickDocument)
    }
    const positionContent = () => {
      document.body.appendChild(contentWrapper.value)
      const {width, height, top, left} = triggerWrapper.value.getBoundingClientRect()
      const {height: height2} = contentWrapper.value.getBoundingClientRect()
      let positions = {
        top: {top: top + window.scrollY, left: left + window.scrollX,},
        bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width
        },
      }
      contentWrapper.value.style.left = positions[position].left + 'px'
      contentWrapper.value.style.top = positions[position].top + 'px'
    }
    const onClickDocument = (e) => {
      if (popover &&
          (popover.value === e.target || popover.value.contains(e.target))
      ) { return }
      if (contentWrapper &&
          (contentWrapper.value === e.target || contentWrapper.value.contains(e.target))
      ) { return }
      close()
    }

    return {visible, popover, contentWrapper, triggerWrapper}
  }
}
</script>

<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin-right: 10px;
}
.content-wrapper {
  z-index: 999;
  position: absolute;
  border: 1.1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  padding: 0.4em 0.5em;
  max-width: 20em;
  word-break: break-all;
  &::before, &::after {
    content: '';
    display: block;
    border: 7px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before, &::after {
      left: 10px;
    }
    &::before {
      border-top-color: black;
      border-bottom: none;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before, &::after {
      left: 10px;
    }
    &::before {
      border-top: none;
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-top: none;
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-left-color: black;
      border-right: none;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      border-right: none;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: black;
      border-left: none;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      border-left: none;
      right: calc(100% - 1px);
    }
  }
}
</style>