<template>
  <button
    class="sx-button"
    :type="htmlType"
    :class="[
      `sx-button-${type}`,
      `sx-button-${theme}`,
      size ? `sx-button-size-${size}` : null,
      block ? `sx-button-block` : null,
      disabled ? `sx-button-disabled` : null,
      loading ? `sx-button-loading sx-button-with-icon` : null,
    ]"
    :disabled="disabled"
  >
    <span class="sx-button-content">
      <svg
        v-if="loading"
        width="48"
        height="48"
        viewBox="0 0 36 36"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="0%"
            y1="100%"
            x2="100%"
            y2="100%"
            id="linearGradient-67"
          >
            <stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop>
            <stop
              stop-color="currentColor"
              stop-opacity="0.50"
              offset="39.9430698%"
            ></stop>
            <stop stop-color="currentColor" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g
          id="Artboard"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <rect
            id="Rectangle"
            fill-opacity="0.01"
            fill="#FFFFFF"
            x="0"
            y="0"
            width="36"
            height="36"
          ></rect>
          <path
            d="M34,18 C34,9.163444 26.836556,2 18,2 C11.6597233,2 6.18078805,5.68784135 3.59122325,11.0354951"
            id="Path"
            stroke="url(#linearGradient-67)"
            stroke-width="4"
            stroke-linecap="round"
          ></path>
        </g>
      </svg>
      <span v-if="loading" class="sx-button-content-right">
        <slot></slot>
      </span>
      <slot v-else></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { props } from "./props";
export default defineComponent({
  name: "SxButton",
  props,
  setup(props) {},
});
</script>

<style lang="scss">
@import "../../_styles/main.scss";
@import "./Button.scss";
</style>
