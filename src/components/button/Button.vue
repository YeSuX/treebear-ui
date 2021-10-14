<template>
  <button class="sx-button" :class="[`sx-button--${type}`]">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { props } from "./props";
export default {
  name: "Button",
  props,
  created(){
    console.log();
    
  }
};
</script>

<style lang="scss">
@import "./Button.scss";
</style>