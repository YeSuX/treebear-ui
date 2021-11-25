import sxSpin from '../spin.vue';
// import SxButton from '../../button/Button';

import { ref } from 'vue'

export default {
  title: '反馈类/加载器 Spin',
  component: sxSpin
}

const baseTemplate = () => ({
  components: { sxSpin },
  template: `<sx-spin></sx-spin>`,
  setup() {
  }
})

const sizeTemplate = () => ({
  components: { sxSpin },
  template: `
  <sx-spin size="small"></sx-spin>
  <sx-spin size="middle"></sx-spin>
  <sx-spin size="large"></sx-spin>
  `,
  setup() {
  }
})

const colorTemplate = () => ({
  components: { sxSpin },
  template: `
  <sx-spin></sx-spin>
  <sx-spin color="#9dbdc6"></sx-spin>
  <sx-spin color="#ff3d2e"></sx-spin>
  <sx-spin color="#daeaef"></sx-spin>
  <sx-spin color="#272f32"></sx-spin>
  `,
  setup() {
  }
})

const tipTemplate = () => ({
  components: { sxSpin },
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
  components: { sxSpin },
  template: `
  <sx-spin indicator="spin"></sx-spin>
  <sx-spin indicator="rotation_stroked"></sx-spin>
  <sx-spin indicator="cross_circle_stroked"></sx-spin>
  `,
  setup() {
  }
})

// const delayTemplate = () => ({
//   components: { sxSpin,SxButton },
//   template: `
//   <sx-Button @click="toggleLoading">延迟显示的spin</sx-Button>
//   <sx-Spin v-if="loading" :delay=1000></sx-Spin>
//   `,
//   setup() {
//     const loading = ref(false);
//     const toggleLoading = ()=>{
//       loading.value = !loading.value;
//     }
    
//     return {loading,toggleLoading}
//   }
// })

export const 基本用法 = baseTemplate.bind({});

export const 颜色 = colorTemplate.bind({});

export const 尺寸 = sizeTemplate.bind({});

export const 带文字的 = tipTemplate.bind({});

export const 自定义加载指示符 = indicatorTemplate.bind({});

// export const 延迟显示 = delayTemplate.bind({});

