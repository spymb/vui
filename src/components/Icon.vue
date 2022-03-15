<template>
  <svg class="gulu-icon">
    <use :xlink:href="`#${prefix}${name}`"></use>
  </svg>
</template>

<script lang="ts">

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
      required: false,
      default: 'icon-',
    },
  },
};
</script>

<style scoped lang="scss">
.gulu-icon {
  display: block;
}
</style>