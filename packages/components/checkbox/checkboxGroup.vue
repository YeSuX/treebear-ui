<template>
  <div
    class="sx-checkboxGroup sx-checkboxGroup-wrapper sx-checkboxGroup-vertical"
  >
    <slot></slot>
  </div>
</template>
<script>
import { props } from "./checkboxGroupProps";
import { watch, reactive,ref } from "vue";

export default {
  name: "sxCheckboxGroup",
  props,
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const checkList = ref([]);

    console.log("checkList", checkList.value);
    console.log("props.modelValue", props.modelValue);

    watch(
      () => props.modelValue,
      (newValue) => {
        checkList.value = newValue;
      },
      {
        immediate: true,
      }
    );
  },
};
</script>
<style lang="scss">
@import "./checkbox.scss";
</style>