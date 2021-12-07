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
import { getCurrentInstance, nextTick, watch, toRaw } from "vue";
import sxIcon from "../icon/icon.vue";
import Emitter from "../../mixins/emitter";

export default {
  name: "sxCheckbox",
  props,
  components: { sxIcon },
  mixins: [Emitter],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const value = ref(false);
    const checkGroup = ref([]);
    const _parent = getCurrentInstance()?.parent;
    const { dispatch } = Emitter();

    const isGroup = computed(() => {
      const parent = getCurrentInstance()?.parent;
      const parentName = parent.vnode.type.name;
      if (parentName == "sxCheckboxGroup") {
        return true;
      } else {
        return false;
      }
    });

    if (isGroup.value) {
      const parent = getCurrentInstance()?.parent;
      checkGroup.value = toRaw(parent.vnode.props.modelValue);
    }

    if (toRaw(checkGroup.value).includes(props.value)) {
      value.value = true;
      emit("update:modelValue", value.value);
    }

    const handleClick = () => {
      if (props.disabled) {
        return;
      }
      value.value = !value.value;
      emit("update:modelValue", value.value);
      nextTick(() => {
        if (isGroup.value) {
          dispatch("sxCheckboxGroup", _parent, props.value, value.value);
        }
      });
    };

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

    return { value, handleClick, isGroup };
  },
};
</script>
<style lang="scss">
@import "./checkbox.scss";
</style>