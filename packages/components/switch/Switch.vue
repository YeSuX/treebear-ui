<template>
  <div
    class="sx-switch"
    :class="[
      value ? 'sx-switch-checked' : null,
      size && size != 'normal' ? `sx-switch-${size}` : null,
      disabled ? 'sx-switch-disabled' : null,
      loading ? 'sx-switch-loading' : null,
    ]"
  >
    <sx-spin color="white" v-if="loading"></sx-spin>
    <div class="sx-switch-knob" v-if="!loading"></div>
    <div class="sx-switch-checked-text" v-if="checkedText && value && !loading">
      {{ checkedText }}
    </div>
    <div class="sx-switch-unchecked-text" v-if="uncheckedText && !value && !loading">
      {{ uncheckedText }}
    </div>
    <input
      type="checkbox"
      role="switch"
      class="sx-switch-native-control"
      @change="handleChange"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, watch } from "vue";
import { props } from "./props";
import SxSpin from '../spin/Spin.vue'

export default defineComponent({
  name: "SxSwitch",
  props,
  emits: ["update:modelValue", "change"],
  components:{SxSpin},
  setup(props, { emit }) {
    const value: Ref<Boolean> = ref(false);

    watch(
      () => props.modelValue,
      (newValue) => {
        value.value = newValue;
      },
      {
        immediate: true,
      }
    );

    const handleChange = () => {
      if (props.disabled || props.loading) {
        return;
      }
      value.value = !value.value;
      emit("update:modelValue", value.value);
    };

    return { value, handleChange };
  },
});
</script>

<style lang="scss">
@import "./Switch.scss";
</style>
