<template>
  <teleport to=".sx-notification-list">
    <div v-if="show" class="sx-notification-notice">
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
  </teleport>
</template>
<script>
import { getCurrentInstance, ref } from "@vue/runtime-core";
import sxButton from "../button/button";

export default {
  name: "sxNotification",
  components: { sxButton },
  setup() {
    const show = ref(true);
    const title = ref("");
    const content = ref("");
    //获取参数
    const options = getCurrentInstance().type.options;
    title.value = options.title;
    content.value = options.content;

    //关闭
    const close = () => {
      show.value = false;
    };

    return { title, content, show, close };
  },
};
</script>

<style lang="scss">
@import "./notification.scss";
</style>