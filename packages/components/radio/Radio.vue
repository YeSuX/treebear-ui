<template>
  <label>
    <RadioInner></RadioInner>
    <span class="sx-radio-addon">单选</span>
  </label>
</template>

<script lang="ts">
import RadioInner from "./RadioInner";
import { defineComponent } from "vue";
export default defineComponent({
  name: "SxRadio",
  components: {
    [RadioInner.name]: RadioInner,
  },
});
</script>

<style>
</style>