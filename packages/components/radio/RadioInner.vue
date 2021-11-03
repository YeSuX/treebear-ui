<template>
  <span
    class="sx-radio-inner"
    :class="[checked ? 'sx-radio-inner-checked' : null]"
  >
    <input type="radio" @click="handleClick" />
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
</template>

<script lang="ts">
import { props } from "./props";
import { computed, defineComponent, ref, watch } from "vue";
import { Ref, ComputedRef } from "vue";

export default defineComponent({
  name: "RadioInner",
  props,
  setup(props, { emit }) {
    const value: Ref<any> = ref(false);
    const checked: ComputedRef<boolean> = computed(() => value.value === props.checkedValue);

    watch(
      () => props.modelValue,
      (newValue) => {
        value.value = newValue;
      },
      { immediate: true }
    );

    const change = (changedValue: any) => {
      value.value = changedValue;
      
      props["update:modelValue"]?.(value.value);
      console.log("modelValue",props.modelValue);
    };

    const handleClick = (e: Event) => {
      const { uncheckedValue, checkedValue } = props;
      change(checked.value ? uncheckedValue : checkedValue);
      console.log("checked", checked.value);
    };

    return {
      handleClick,
      checked,
    };
  },
});
</script>
