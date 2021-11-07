<template>
  <div
    class="sx-radioGroup"
    :class="[direction ? `sx-radioGroup-${direction}` : null]"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {props} from "./props";

export default defineComponent({
  name: "SxRadioGroup",
  props,
  setup() {},
});
</script>
