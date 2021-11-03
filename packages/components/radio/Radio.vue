<template>
  <label class="sx-radio" :class="[disabled ? 'sx-radio-disabled' : null]">
    <span
      class="sx-radio-inner"
      :class="[checked ? 'sx-radio-inner-checked' : null]"
    >
      <input type="radio" @click="handleClick" :disabled="disabled" />
      <span class="sx-radio-inner-display">
        <span v-if="checked" class="sx-icon sx-icon-radio">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            focusable="false"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="5" fill="currentColor"></circle>
          </svg>
        </span>
      </span>
    </span>
    <span class="sx-radio-addon"><slot></slot></span>

    <div class="sx-radio-extra" v-if="extra">
      {{ extra }}
    </div>
  </label>
</template>

<script lang="ts">
import { props } from "./props";
import { computed, defineComponent, ref, watch } from "vue";
import { Ref, ComputedRef } from "vue";

export default defineComponent({
  name: "RadioInner",
  props,
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const value: Ref<any> = ref(false);
    const checked: ComputedRef<boolean> = computed(
      () => value.value === props.checkedValue
    );

    watch(
      () => props.modelValue,
      (newValue) => {
        value.value = newValue;
      },
      { immediate: true }
    );

    const change = (changedValue: any) => {
      value.value = changedValue;

      emit("update:modelValue", value.value);
    };

    const handleClick = (e: Event) => {
      const { uncheckedValue, checkedValue,mode } = props;
console.log('value',mode === 'advanced'?('123'):checkedValue);

      change(mode === 'advanced'?(value.value === checkedValue?uncheckedValue:checkedValue):checkedValue);
    };

    return {
      handleClick,
      checked,
    };
  },
});
</script>

<style lang="scss">
@import "../../_styles/main.scss";
@import "./Radio.scss";
</style>