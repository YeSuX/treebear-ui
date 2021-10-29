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
      disabled ? 'sx-button--disabled' : null,
    ]"
    :style="{ background: color, color: textColor }"
    :disabled="disabled"
  >
    <div class="var-button__content">
      <slot></slot>
    </div>
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
@import "../../_styles/main.scss";
@import "./Button.scss";
</style>