<template>
  <div
    class="sx-button-group"
    :class="[
      size ? `sx-button-group-${size}` : null,
      disabled ? `sx-button-group-disabled` : null,
      type ? `sx-button-group-${type}` : null,
      theme ? `sx-button-group-${theme}` : null,
    ]"
  >
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import {props} from './prop'

export default defineComponent({
  name: "sxButtonGroup",
  props,
  setup() {},
});
</script>
