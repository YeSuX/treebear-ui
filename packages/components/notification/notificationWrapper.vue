<template>
  <div ref="wrapper" class="sx-notification-wrapper">
    <div
      class="sx-notification-list"
      :class="[position ? `sx-notification-list-${position}` : null]"
    ></div>
  </div>
</template>
<script>
import {ref} from 'vue'
import { getCurrentInstance } from "@vue/runtime-core";
export default {
  setup() {
    const options = getCurrentInstance().type.options;
    console.log("options-root", options);
    const position = ref(options.position);

    return { position };
  },
};
</script>

<style lang="scss">
@import "./notification.scss";
</style>