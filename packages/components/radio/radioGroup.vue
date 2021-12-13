<template>
  <div
    class="sx-radioGroup sx-radioGroup-wrapper"
    :class="[direction ? `sx-radioGroup-${direction}` : null]"
  >
    <slot></slot>
  </div>
</template>
<script>
import { props } from "./radioGroupProps";
import { watch } from "vue";

export default {
  name: "sxRadioGroup",
  props,
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    let checkValue = "";

    const handleClick = (value, eventFlag) => {
      if (eventFlag) {
        checkValue = value;
        emit("update:modelValue", checkValue);
      }
    };

    watch(
      () => props.modelValue,
      (newValue) => {
        checkValue = newValue;
      },
      { immediate: true }
    );

    return { handleClick };
  },
};
</script>
<style lang="scss">
@import "./radio.scss";
</style>