<template>
  <button
    class="sx-button"
    :class="[
      `sx-button--${size}`,
      `sx-button--${type}`,
      block ? 'sx--flex sx-button--block' : 'sx--inline-flex',
      round ? 'sx-button--round' : null,
      circle ? 'sx-button--circle' : null,
      bordered ? 'sx-button--bordered' : null,
      ghost ? 'sx-button--ghost' : null,
      disabled ? 'sx-button--disabled' : null,
    ]"
    :style="{ background: color, color: textColor }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { props } from "./props";
export default {
  name: "Button",
  props,
  created() {
    console.log();
  },
};
</script>

<style lang="scss">
@import "./Button.scss";
</style>