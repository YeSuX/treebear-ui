<template>
  <div
    class="sx-radio"
    @click="handleChlick"
    :class="[disabled ? 'sx-radio-disabled' : null]"
  >
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
    <div v-if="extra" class="sx-radio-extra">{{ extra }}</div>
  </div>
</template>
<script>
import { props } from "./radioProps";
import sxIcon from "../icon/icon.vue";
import { ref, computed, getCurrentInstance, watch, nextTick } from "vue";
import Emitter from "../../mixins/emitter";

export default {
  name: "sxRadio",
  props,
  mixins: [Emitter],
  components: { sxIcon },
  setup(props, { emit }) {
    const value = ref(false);
    const _parent = getCurrentInstance()?.parent;
    const { dispatch } = Emitter();
    let radioGroup = "";

    const isGroup = computed(() => {
      const parent = getCurrentInstance()?.parent;
      const parentName = parent.vnode.type.name;
      if (parentName == "sxRadioGroup") {
        return true;
      } else {
        return false;
      }
    });

    if (isGroup.value) {
      radioGroup = _parent.vnode.props.modelValue;
    }

    console.log("radioGroup", radioGroup);

    if (radioGroup == props.value) {
      value.value = true;
      emit("update:modelValue", value.value);
    } else {
      value.value = false;
    }

    const handleChlick = () => {
      if (props.disabled) {
        return;
      }
      if (props.advanced) {
        value.value = !value.value;
      } else {
        value.value = true;
      }
      emit("update:modelValue", value.value);
      nextTick(() => {
        if (isGroup.value) {
          dispatch("sxRadioGroup", _parent, props.value, value.value);
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

    return { value, handleChlick };
  },
};
</script>
<style lang="scss">
@import "./radio.scss";
</style>