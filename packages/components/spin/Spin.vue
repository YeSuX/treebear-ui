<template>
  <div
    v-if="loading"
    class="sx-spin"
    :class="[size ? `sx-spin-${size}` : null, tip ? 'sx-spin-block' : null]"
  >
    <div class="sx-spin-wrapper">
      <sx-Icon :name="indicator" spin></sx-Icon>
      <div v-if="tip">{{ tip }}</div>
    </div>
    <div class="sx-spin-children">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import sxIcon from "../icon/Icon.vue";
import { props } from "./props";

export default defineComponent({
  name: "SxSpin",
  props,
  components: {
    sxIcon,
  },
  setup(props) {
    const loading = ref(false);
    setTimeout(() => {
      loading.value = true;
    }, props.delay);
    return { loading };
  },
});
</script>

<style lang="scss">
@import "./Spin.scss";
</style>
