<template>
  <div class="sx-radio">
    <span
      class="sx-radio-inner"
      :class="[value ? 'sx-radio-inner-checked' : null]"
    >
      <input type="radio" />
      <span class="sx-radio-inner-display">
        <sx-icon v-if="value" name="radio"></sx-icon>
      </span>
    </span>
    <div class="sx-radio-addon">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { props } from "./radioProps";
import sxIcon from "../icon/icon.vue";
import { ref, computed, getCurrentInstance, watch } from "vue";

export default {
  name: "sxRadio",
  props,
  components: { sxIcon },
  setup(props) {
    const value = ref(false);

    const isGroup = computed(() => {
      const parent = getCurrentInstance()?.parent;
      const parentName = parent.vnode.type.name;
      if (parentName == "sxRadioGroup") {
        return true;
      } else {
        return false;
      }
    });

    watch(
      () => props.modelValue,
      (newValue) => {
        if (!isGroup.value) {
          value.value = newValue;
        }
      },
      {
        immediate: true,
      }
    );

    return { value };
  },
};
</script>
<style lang="scss">
@import "./radio.scss";
</style>