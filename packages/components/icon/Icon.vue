<template>
  <svg>
    <use :xlink:href="iconName" />
  </svg>
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
    // console.log('hf',hf);
    return { iconName };
  },
});
</script>
