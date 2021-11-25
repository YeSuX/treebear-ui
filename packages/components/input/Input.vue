<template>
  <div
    class="sx-input-wrapper"
    :class="[
      onFocus ? 'sx-input-wrapper-focus' : null,
      size ? `sx-input-wrapper-${size}` : null,
      disabled ? 'sx-input-wrapper-disabled' : null,
      prefix || prefix_icon ? 'sx-input-wrapper__with-prefix' : null,
      suffix || suffix_icon ? 'sx-input-wrapper__with-suffix' : null,
      addonBefore ? 'sx-input-wrapper__with-prepend' : null,
      addonAfter ? 'sx-input-wrapper__with-append' : null,
      showClear ? 'sx-input-wrapper-clearable' : null,
      password ? 'sx-input-wrapper-modebtn' : null,
      validateStatus ? `sx-input-wrapper-${validateStatus}` : null,
    ]"
    @mouseenter="textEnter"
    @mouseleave="textLeave"
  >
    <div v-if="addonBefore" class="sx-input-prepend sx-input-prepend-text">
      {{ addonBefore }}
    </div>
    <div v-if="prefix" class="sx-input-prefix sx-input-prefix-text">
      {{ prefix }}
    </div>
    <div v-if="prefix_icon" class="sx-input-prefix sx-input-prefix-icon">
      <sx-icon :name="prefix_icon"></sx-icon>
    </div>

    <input
      @focus="textFocus"
      @input="textChange"
      @blur="textBlur"
      :type="passwordValue ? 'password' : 'text'"
      class="sx-input"
      :class="[
        size ? `sx-input-${size}` : null,
        disabled ? 'sx-input-disabled' : null,
        showClear ? 'sx-input-sibling-clearbtn' : null,
      ]"
      v-model="value"
      :disabled="disabled"
      :placeholder="placeholder"
    />
    <div v-if="addonAfter" class="sx-input-append sx-input-append-text">
      {{ addonAfter }}
    </div>
    <div v-if="suffix_icon" class="sx-input-suffix sx-input-suffix-icon">
      <sx-icon :name="suffix_icon"></sx-icon>
    </div>
    <div v-if="suffix" class="sx-input-suffix sx-input-suffix-text">
      {{ suffix }}
    </div>
    <div
      v-if="showClear && clearValue"
      class="sx-input-clearbtn"
      @mousedown="clearText"
    >
      <sx-icon name="clear"></sx-icon>
    </div>
    <div
      v-if="password && clearValue"
      class="sx-input-modebtn"
      @mousedown="passwordText"
    >
      <sx-icon :name="passwordValue ? 'eye_closed' : 'eye_opened'"></sx-icon>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, ref, watch } from "vue";
import { props } from "./props";
import sxIcon from "../icon/icon.vue";

export default defineComponent({
  name: "sxInput",
  props,
  emits: ["update:modelValue"],
  components: { sxIcon },
  setup(props, { emit }) {
    const value = ref("");
    const onFocus = ref(false);
    const onhover = ref(false);
    const passwordValue = ref(props.password);

    const clearValue = computed(() => {
      return (onFocus.value || onhover.value) && value.value != "";
    });

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
    const textEnter = () => {
      onhover.value = true;
    };
    const textLeave = () => {
      onhover.value = false;
    };
    const clearText = () => {
      value.value = "";
      emit("update:modelValue", value.value);
    };
    const passwordText = () => {
      passwordValue.value = !passwordValue.value;
    };

    return {
      value,
      onFocus,
      textChange,
      textFocus,
      textBlur,
      clearValue,
      clearText,
      textEnter,
      textLeave,
      passwordText,
      passwordValue,
    };
  },
});
</script>
<style lang="scss">
@import "./input.scss";
</style>
