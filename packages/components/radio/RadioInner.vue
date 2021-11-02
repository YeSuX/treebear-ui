<template>
  <span
    class="sx-radio-inner"
    :class="[checkValue ? 'sx-radio-inner-checked' : null]"
  >
    <input type="radio" @click="handleClick" />
    <span class="sx-radio-inner-display">
      <span v-if="checkValue" class="sx-icon sx-icon-radio">
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
import { defineComponent, ref } from "vue";
import { Ref, ComputedRef } from "vue";

export default defineComponent({
  name: "RadioInner",
  props,
  setup(props) {
    const checkValue: Ref<any> = ref(false);
    const handleClick = (e: Event) => {
      const {modelValue} = props
      checkValue.value = true;
      console.log('props',modelValue);
      
    };

    return {
      handleClick,
      checkValue,
    };
  },
});
</script>
