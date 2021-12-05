<template>
  <div
    class="sx-checkbox"
    :class="[
      value ? 'sx-checkbox-checked' : 'sx-checkbox-unChecked',
      disabled ? 'sx-checkbox-disabled' : null,
    ]"
    @click="handleClick"
  >
    <div
      class="sx-checkbox-inner"
      :class="[value ? 'sx-checkbox-inner-checked' : null]"
    >
      <input type="checkbox" class="sx-checkbox-input" />
      <span class="sx-checkbox-inner-display">
        <sx-icon name="checkbox_tick" v-if="value"></sx-icon>
      </span>
    </div>
    <div class="sx-checkbox-addon">
      <slot></slot>
    </div>
    <div class="sx-checkbox-extra">
      {{ extra }}
    </div>
  </div>
</template>
<script>
import { computed, ref } from "@vue/reactivity";
import { props } from "./checkboxProps";
import { getCurrentInstance, nextTick, watch } from "@vue/runtime-core";
import sxIcon from "../icon/icon.vue";

export default {
  name: "sxCheckbox",
  props,
  components: { sxIcon },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const value = ref(false);

    const handleClick = () => {
      if (props.disabled) {
        return;
      }
      value.value = !value.value;
      emit("update:modelValue", value.value);
      nextTick(()=>{
        if (isGroup.value) {
          const parent = getCurrentInstance()?.parent;
          // const parentName = parent.vnode.type.props;
        }
      })
    };

    const isGroup = computed(() => {
      const parent = getCurrentInstance()?.parent;
      const parentName = parent.vnode.type.name;
      if (parentName == "sxCheckboxGroup") {
        return true;
      } else {
        return false;
      }
    });

    console.log(isGroup.value);

    watch(
      () => props.modelValue,
      (newValue) => {
        value.value = newValue;
      },
      {
        immediate: true,
      }
    );

    return { value, handleClick };
  },
};
</script>
<style lang="scss">
@import "./checkbox.scss";
</style>