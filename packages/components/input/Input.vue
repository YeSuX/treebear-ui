<template>
  <div
    class="sx-input-wrapper"
    :class="[
      onFocus ? 'sx-input-wrapper-focus' : null,
      size ? `sx-input-wrapper-${size}` : null,
      disabled ? 'sx-input-wrapper-disabled' : null,
    ]"
  >
    <input
      @focus="textFocus"
      @input="textChange"
      @blur="textBlur"
      type="text"
      class="sx-input"
      :class="[
        size ? `sx-input-${size}` : null,
        disabled ? 'sx-input-disabled' : null,
      ]"
      v-model="value"
      :disabled="disabled"
      :placeholder="placeholder"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { props } from "./props";

export default defineComponent({
  name: "SxInput",
  props,
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const value = ref("");
    const onFocus = ref(false);

    watch(
      () => props.modelValue,
      (newValue) => {
        value.value = newValue;
      },
      { immediate: true }
    );

    const textChange = () => {
      emit("update:modelValue", value.value);
    };
    const textFocus = () => {
      onFocus.value = true;
    };
    const textBlur = () => {
      onFocus.value = false;
    };

    return { value, onFocus, textChange, textFocus, textBlur };
  },
});
</script>
<style lang="scss">
@import "./Input.scss";
</style>
