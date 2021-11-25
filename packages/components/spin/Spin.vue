<template>
  <div
    v-if="loading"
    class="sx-spin"
    :class="[size ? `sx-spin-${size}` : null, tip ? 'sx-spin-block' : null]"
  >
    <div class="sx-spin-wrapper">
      <sx-Icon :color="color" :name="indicator" spin></sx-Icon>
      <div v-if="tip">{{ tip }}</div>
    </div>
    <div class="sx-spin-children">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { props } from "./props";
import sxIcon from '../icon/icon.vue'

export default defineComponent({
  name: "sxSpin",
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
@import "./spin.scss";
</style>
