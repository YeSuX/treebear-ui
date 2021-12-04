<template>
  <div class="sx-select" @click="toggleMenu">
    <div class="sx-select-selection">
      <div class="sx-select-content-wrapper">
        <span class="sx-select-selection-text">苹果</span>
      </div>
    </div>
    <div class="sx-select-arrow">
      <sx-icon name="chevron_down_stroked"></sx-icon>
    </div>
  </div>
</template>
<script>
import sxIcon from "../icon/icon.vue";

export default {
  name: "sxSelect",
  components: { sxIcon },
  setup() {
    const toggleMenu = () => {
      console.log("点击select");
    };

    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
@import "./select.scss";
</style>