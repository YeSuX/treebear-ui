<template>
  <teleport :to="positionName">
    <transition name="sx-fade">
      <div
        v-if="show"
        class="sx-notification-notice"
        :class="[
          light ? 'sx-notification-notice-light' : null,
          type ? `sx-notification-notice-${type}` : null,
        ]"
      >
        <div v-if="type || icon">
          <div
            :class="[
              type ? `sx-notification-notice-${type}` : null,
              icon || type ? 'sx-notification-notice-icon' : null,
            ]"
          >
            <sx-icon v-if="type" :name="type"></sx-icon>
            <sx-icon v-if="icon" :name="icon"></sx-icon>
          </div>
        </div>
        <div class="sx-notification-notice-inner">
          <div class="sx-notification-notice-content-wrapper">
            <div class="sx-notification-notice-title">{{ title }}</div>
            <div class="sx-notification-notice-content">{{ content }}</div>
          </div>
          <sx-button
            class="sx-notification-notice-icon-close"
            icon="close"
            @click="close"
          ></sx-button>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script>
import { getCurrentInstance, ref } from "@vue/runtime-core";
import sxButton from "../button/button";
import sxIcon from "../icon/icon";

export default {
  name: "sxNotification",
  components: { sxButton, sxIcon },
  setup() {
    const show = ref(true);
    const title = ref("");
    const content = ref("");
    //获取参数
    const options = getCurrentInstance().type.options;
    console.log("options", options);
    const duration = options.duration;
    const position = options.position;
    const positionName = ref(".sx-notification-list-" + position);
    const type = ref(options.type);
    const icon = ref(options.icon);
    const light = ref(options.theme);

    title.value = options.title;
    content.value = options.content;

    //关闭
    const close = () => {
      show.value = false;
    };

    //自动关闭
    if (duration > 0) {
      setTimeout(() => {
        close();
      }, duration * 1000);
    }

    return { title, content, show, close, positionName, type, icon, light };
  },
};
</script>

<style lang="scss">
@import "./notification.scss";
</style>