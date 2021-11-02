<template>
  <label class="sx-radio">
    <RadioInner></RadioInner>
    <span class="sx-radio-addon"><slot></slot></span>
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
  setup(props) {},
});
</script>

<style lang="scss">
@import "../../_styles/main.scss";
@import "./Radio.scss";
</style>