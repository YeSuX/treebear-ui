<template>
  <ul
    class="sx-rating"
    @mouseleave="resetCurrentValue"
    role="radiogroup"
    tabindex="-1"
    :class="[disabled ? 'sx-rating-disabled' : null]"
  >
    <li
      v-for="(item, key) in max"
      :key="key"
      class="sx-rating-star"
      :class="[
        isFull(key) ? `sx-rating-star-full` : null,
        isHalf(key) ? 'sx-rating-star-half' : null,
      ]"
    >
      <div
        role="radio"
        @mousemove="onHover(key)"
        @click="selectValue(key)"
        :aria-checked="value > key ? 'true' : 'false'"
        :aria-posinset="key + 1"
        :aria-setsize="max"
        :tabIndex="0"
      >
        <div
          class="sx-rating-star-first"
          :style="isHalf(key) ? `width:${width}%` : null"
        >
          <span v-html="character"></span>
        </div>
        <div class="sx-rating-star-second">
          <span v-html="character"></span>
        </div>
      </div>
    </li>
    <span class="sx-rating-text" v-if="showText">{{ text }}</span>
  </ul>
</template>
<script>
/**
 * 优化备忘
 * 1. 鼠标移入 加入节流渲染优化
 * 2. 半星选择 后续开发
 * */
import { defineComponent, ref, watch } from "vue";
import { props } from "./props";

export default defineComponent({
  name: "SxRating",
  emits: ["update:modelValue", "change"],
  props,
  setup(props, { emit }) {
    const value = ref(0);
    const currentValue = ref(0);
    const width = ref(0);
    const text = ref("");

    const isFull = (key) => {
      return Math.floor(value.value) > key;
    };

    const isHalf = (key) => {
      return Math.ceil(value.value) == key && props.allowHalf;
    };

    watch(
      () => props.modelValue,
      (newValue) => {
        value.value = Math.floor(newValue);
        currentValue.value = Math.floor(newValue);
        width.value = (newValue - Math.floor(newValue)) * 100;
        text.value = props.texts[value.value - 1];
      },
      { immediate: true }
    );

    const getText = (key) => {
      text.value = props.texts[key];
    };

    const onHover = (key) => {
      if (props.disabled) {
        return;
      }
      value.value = key + 1;
      getText(key);
    };
    const resetCurrentValue = () => {
      if (props.disabled) {
        return;
      }
      value.value = currentValue.value;
      getText(value.value - 1);
      emit("update:modelValue", currentValue.value);
      emit("change", currentValue.value);
    };
    const selectValue = (key) => {
      if (props.disabled) {
        return;
      }
      if (props.allowClear && currentValue.value === key + 1) {
        currentValue.value = 0;
        text.value = "";
      } else {
        currentValue.value = key + 1;
        getText(key);
      }
      emit("update:modelValue", currentValue.value);
      emit("change", currentValue.value);
    };

    return {
      text,
      width,
      onHover,
      value,
      resetCurrentValue,
      selectValue,
      isFull,
      isHalf,
    };
  },
});
</script>

<style lang="scss">
@import "./rating.scss";
</style>
