<template>
  <div v-if="type === 'circle'" class="sx-progress-circle">
    <svg
      class="sx-progress-circle-ring"
      :height="size === 'small' ? 24 : 72"
      :width="size === 'small' ? 24 : 72"
    >
      <circle
        stroke-dashoffset="0"
        stroke-width="4"
        stroke-dasharray="213.62830044410595 213.62830044410595"
        stroke-linecap="round"
        fill="transparent"
        stroke="var(--sx-color-fill-0)"
        :r="size === 'small' ? 10 : 34"
        :cx="size === 'small' ? 12 : 36"
        :cy="size === 'small' ? 12 : 36"
      ></circle>
      <circle
        class="sx-progress-circle-ring-inner"
        :stroke-dashoffset="rate"
        stroke-width="4"
        stroke-dasharray="213.62830044410595 213.62830044410595"
        stroke-linecap="round"
        fill="transparent"
        stroke="var(--sx-color-success)"
        :r="size === 'small' ? 10 : 34"
        :cx="size === 'small' ? 12 : 36"
        :cy="size === 'small' ? 12 : 36"
      ></circle>
    </svg>
    <span v-if="text" class="sx-progress-circle-text">{{ text }}</span>
  </div>
  <div
    v-else
    class="sx-progress"
    :class="[
      size ? `sx-progress-${size}` : null,
      direction ? `sx-progress-${direction}` : null,
    ]"
  >
    <div class="sx-progress-track">
      <div class="sx-progress-track-inner" :style="style"></div>
    </div>
    <div v-if="showInfo" class="sx-progress-line-text">{{ percent }}%</div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import { props } from "./props";
import { watch } from "@vue/runtime-core";

export default {
  name: "sxProgress",
  props,
  setup(props) {
    const style = ref({});
    const rate = ref(0);
    const percent = ref(props.percent);

    style.value.backgroundColor = props.stroke;
    if (props.direction === "horizontal") {
      style.value.width = percent.value + "%";
    } else {
      style.value.height = percent.value + "%";
    }

    rate.value = ((100 - percent.value) * 213) / 100;

    return { style, rate, percent };
  },
};
</script>
<style lang="scss">
@import "./progress.scss";
</style>