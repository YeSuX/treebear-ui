// @ts-ignore
import SxSpin from '../Spin.vue';
import SxButton from '../../button/Button';

import { ref } from 'vue'

export default {
  title: '反馈类/加载器 Spin',
  component: SxSpin
}

const baseTemplate = () => ({
  components: { SxSpin },
  template: `<sx-Spin></sx-Spin>`,
  setup() {
  }
})

const sizeTemplate = () => ({
  components: { SxSpin },
  template: `
  <sx-Spin size="small"></sx-Spin>
  <sx-Spin size="middle"></sx-Spin>
  <sx-Spin size="large"></sx-Spin>
  `,
  setup() {
  }
})

const tipTemplate = () => ({
  components: { SxSpin },
  template: `
  <sx-Spin tip="加载中……">
  <div
      style="
          border: 1px solid var(--sx-color-primary);
          borderRadius: 4px;
          paddingLeft: 8px;
          "
      
    >
      <p>Here are some texts.</p>
      <p>And more texts on the way.</p>
    </div>
  </sx-Spin>
  `,
  setup() {
  }
})

const indicatorTemplate = () => ({
  components: { SxSpin },
  template: `
  <sx-Spin indicator="spin"></sx-Spin>
  <sx-Spin indicator="rotation_stroked"></sx-Spin>
  <sx-Spin indicator="cross_circle_stroked"></sx-Spin>
  `,
  setup() {
  }
})

const delayTemplate = () => ({
  components: { SxSpin,SxButton },
  template: `
  <sx-Button @click="toggleLoading">延迟显示的spin</sx-Button>
  <sx-Spin v-if="loading" :delay=1000></sx-Spin>
  `,
  setup() {
    const loading = ref(false);
    const toggleLoading = ()=>{
      loading.value = !loading.value;
    }
    
    return {loading,toggleLoading}
  }
})

export const 基本用法 = baseTemplate.bind({});

export const 尺寸 = sizeTemplate.bind({});

export const 带文字的 = tipTemplate.bind({});

export const 自定义加载指示符 = indicatorTemplate.bind({});

export const 延迟显示 = delayTemplate.bind({});
