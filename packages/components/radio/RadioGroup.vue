<template>
  <div
    class="sx-radioGroup"
    :class="[direction ? `sx-radioGroup-${direction}` : null]"
    ref="radioGroup"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { findComponentsDownward } from "../../utils/assist";
import { props } from "./groupProps";

export default defineComponent({
  name: "SxRadioGroup",
  props,
  setup(props, { slots }) {
    let currentValue = props.value;
    let children = [];
    const radioGroup = ref();
    onMounted(() => {
      const radios = radioGroup.value.querySelectorAll("[type=radio]");
      const firstLabel = radioGroup.value.querySelectorAll("[role=radio]")[0];
      console.log("radios", radios);
      // console.log("radios", ![].some.call(radios, (radio) => radio.checked));
      // if (![].some.call(radios, (radio) => radio.checked) && firstLabel) {
      //   firstLabel.tabIndex = 0;
      // }

      // let children = findComponentsDownward(radioGroup.value, "Radio");
    });
    return { radioGroup };
  },
});
</script>
