<template>
  <div
    v-if="showValue"
    class="sx-banner"
    :class="[
      type ? `sx-banner-${type}` : null,
      fullMode ? 'sx-banner-full' : 'sx-banner-bordered sx-banner-in-container',
    ]"
  >
    <div class="sx-banner-content-wrapper">
      <div class="sx-banner-content">
        <div class="sx-banner-icon">
          <sx-icon :name="type"></sx-icon>
        </div>
        <div class="sx-banner-content-body">
          <div class="sx-banner-description">
            {{ description }}
          </div>
        </div>
      </div>
      <sx-button
        @click="close"
        icon="close"
        class="sx-banner-close"
        type="tertiary"
      ></sx-button>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import sxButton from "../button/button";
import sxIcon from "../icon/icon.vue";
import { props } from "./props";

export default defineComponent({
  name: "sxBanner",
  props,
  components: { sxButton, sxIcon },
  setup() {
    const showValue = ref(true);

    const close = () => {
      showValue.value = false;
    };

    return { close, showValue };
  },
});
</script>
<style lang="scss">
@import "./banner.scss";
</style>
