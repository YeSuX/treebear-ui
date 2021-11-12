<template>
  <span class="sx-icon" :class="[spin ? 'sx-icon-spinning' : null]" :style="{fill:color}">
    <svg :class="[size ? `sx-icon-${size}` : null]">
      <use :xlink:href="iconName" />
    </svg>
  </span>
</template>
<script lang="ts">
import { computed, ComputedRef, defineComponent } from "vue";
import { props } from "./props";

export default defineComponent({
  name: "SxIcon",
  props,
  setup(props) {
    const iconName: ComputedRef<String> = computed(() => {
      return `#sx-icon-${props.name}`;
    });
    return { iconName };
  },
});
</script>
<style lang="scss">
@import "./Icon.scss";
</style>
