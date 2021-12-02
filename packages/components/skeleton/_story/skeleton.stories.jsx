import sxSkeleton from '../skeleton.vue'
import sxSwitch from '../../switch/switch.vue'
import sxButton from '../../button/button.vue'
import { ref } from 'vue'

export default {
  title: '反馈类/骨架屏 Skeleton',
  components: { sxSkeleton }
}

const baseTemplate = () => ({
  components: { sxSkeleton, sxSwitch, sxButton },
  template: `
    <span>显示加载内容：</span>
    <sx-switch v-model="showLoading"></sx-switch>
    <br/>
    <span>显示动画：</span>
    <sx-switch v-model="showActive"></sx-switch>
    <br/>
    <br/>
    <sx-skeleton  :active="showActive" :loading="showLoading" type="avatar">
      <span class="sx-avatar">头像</span>
    </sx-skeleton>
    <br/>
    <sx-skeleton  :active="showActive" :loading="showLoading" type="image" style="width: 200px; height: 150px;">
      <img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg" height="150">
    </sx-skeleton>
    <br/>
    <sx-skeleton  :active="showActive" :loading="showLoading" type="title" style="width: 80px;margin-bottom: 10px;">
      <h4 style="margin-bottom: 0px;">sx UI</h4>
    </sx-skeleton>
    <sx-skeleton  :active="showActive" :loading="showLoading" type="paragraph" :rows="2">
      <p>基于vue3 的ui组件库，大家支持一下！！GitHub点点star！！</p>
    </sx-skeleton>
    <br/>
    <sx-skeleton  :active="showActive" :loading="showLoading" type="button">
      <sx-button>Button</sx-button>
    </sx-skeleton>
  `,
  setup() {
    const showLoading = ref(false);
    const showActive = ref(true);

    return { showLoading, showActive };
  }
})

export const base = baseTemplate.bind({})
base.storyName = '基本使用';