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
      <sx-spin v-if="loading"></sx-spin>
      <sx-icon v-if="icon" :name="icon"></sx-icon>
      <span v-if="loading" class="sx-button-content-right">
        <slot></slot>
      </span>
      <slot v-else></slot>
    </span>
  </button>
</template>

<script>
import { defineComponent } from "vue";
import { props } from "./prop";
import sxSpin from "../spin/spin";
import sxIcon from "../icon/icon";

export default defineComponent({
  name: "sxButton",
  props,
  components: { sxSpin, sxIcon },
  setup(props) {},
});
</script>

<style lang="scss">
@import "./button.scss";
</style>
