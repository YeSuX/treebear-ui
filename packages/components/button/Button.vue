<template>
  <button
    class="sx-button"
    :type="htmlType"
    :class="[
      `sx-button-${type}`,
      `sx-button-${theme}`,
      size ? `sx-button-size-${size}` : null,
      block ? `sx-button-block` : null,
      disabled ? `sx-button-disabled` : null,
      loading ? `sx-button-loading sx-button-with-icon` : null,
      icon ? 'sx-button-with-icon' : null,
    ]"
    :disabled="disabled"
  >
    <span class="sx-button-content">
      <sx-icon v-if="loading" name="spin" spin></sx-icon>
      <sx-icon v-if="icon" :name="icon"></sx-icon>
      <span v-if="loading" class="sx-button-content-right">
        <slot></slot>
      </span>
      <slot v-else></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { props } from "./props";
import SxIcon from "../icon/Icon.vue";

export default defineComponent({
  name: "SxButton",
  props,
  components: { SxIcon },
  setup(props) {},
});
</script>

<style lang="scss">
@import "../../_styles/main.scss";
@import "./Button.scss";
</style>
