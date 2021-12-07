<template>
  <div
    v-if="indeterminate"
    style="padding-bottom: 8px; border-bottom: 1px solid var(--sx-color-border)"
  ></div>
  <div
    class="sx-checkboxGroup sx-checkboxGroup-wrapper"
    :class="[direction ? `sx-checkboxGroup-${direction}` : null]"
  >
    <slot></slot>
  </div>
</template>
<script>
import { props } from "./checkboxGroupProps";
import { watch, reactive, ref, toRaw } from "vue";

export default {
  name: "sxCheckboxGroup",
  props,
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    let checkList = [];

    watch(
      () => props.modelValue,
      (newValue) => {
        checkList = toRaw(newValue);
      },
      { immediate: true }
    );

    const handleClick = (value, eventFlag) => {
      if (eventFlag) {
        checkList.push(value);
        checkList = JSON.parse(JSON.stringify(checkList));
      } else {
        checkList = checkList.filter((item) => {
          return item != value;
        });
      }

      emit("update:modelValue", checkList);
    };

    return { handleClick };
  },
};
</script>
<style lang="scss">
@import "./checkbox.scss";
</style>