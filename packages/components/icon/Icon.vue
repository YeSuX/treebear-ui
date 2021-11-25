<template>
  <span class="sx-icon" :style="{ fill: color }">
    <svg
      :class="[
        size ? `sx-icon-${size}` : null,
        spin ? 'sx-icon-spinning' : null,
      ]"
    >
      <use :xlink:href="iconName" />
    </svg>
  </span>
</template>

<script>
import { computed } from "@vue/reactivity";
import { props } from "./props";
import "./iconBuild";

export default {
  name: "sxIcon",
  props,
  setup(props) {
    const iconName = computed(() => {
      return `#sx-icon-${props.name}`;
    });
    return { iconName };
  },
};
</script>

<style lang="scss">
@import "./icon.scss";
</style>
