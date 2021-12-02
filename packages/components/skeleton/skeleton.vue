<template>
  <div class="sx-skeleton" :class="{ 'sx-skeleton-active': active }">
    <div
      v-if="!loading && type != 'paragraph'"
      :class="[
        size ? `sx-skeleton-avatar-${size}` : null,
        type ? `sx-skeleton-${type}` : null,
      ]"
    ></div>
    <ul v-if="!loading && type === 'paragraph'" class="sx-skeleton-paragraph">
      <li v-for="i in rows" :key="i"></li>
    </ul>
    <slot v-if="loading"></slot>
  </div>
</template>
<script>
import { props } from "./props";

export default {
  name: "sxSkeleton",
  props,
  setup() {},
};
</script>
<style lang="scss">
@import "./skeleton.scss";
</style>
