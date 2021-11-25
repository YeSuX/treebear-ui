// @ts-ignore
import sxSwitch from '../switch.vue';
import { ref } from 'vue'

export default {
  title: '输入类/开关 Switch',
  component: sxSwitch
}

const baseTemplate = () => ({
  components: { sxSwitch },
  template: `
  <sx-switch v-model="value"></sx-switch>
  <span>&emsp;{{value}}</span>
  `,
  setup() {
    const value = ref(false);
    return { value };
  }
})

const sizeTemplate = () => ({
  components: { sxSwitch },
  template: `
  <sx-switch size="large" v-model="value"></sx-switch>
  <sx-switch size="normal" v-model="value"></sx-switch>
  <sx-switch size="small" v-model="value"></sx-switch>
  `,
  setup() {
    const value = ref(false);
    return { value };
  }
})

const disabledTemplate = () => ({
  components: { sxSwitch },
  template: `
  <sx-switch disabled size="large" v-model="value1"></sx-switch>
  <sx-switch disabled v-model="value1"></sx-switch>
  <sx-switch disabled size="small" v-model="value1"></sx-switch>
  <br/>
  <br/>
  <sx-switch disabled size="large" v-model="value2"></sx-switch>
  <sx-switch disabled v-model="value2"></sx-switch>
  <sx-switch disabled size="small" v-model="value2"></sx-switch>
  `,
  setup() {
    const value1 = ref(false);
    const value2 = ref(true);
    return { value1, value2 };
  }
})

const textTemplate = () => ({
  components: { sxSwitch },
  template: `
  <sx-switch checkedText='开' uncheckedText='关' v-model="value1"></sx-switch>
  <sx-switch checkedText='|' uncheckedText='〇' v-model="value1"></sx-switch>
  <br/>
  <br/>
  <sx-switch checkedText='开' uncheckedText='关' size="large" v-model="value2"></sx-switch>
  <sx-switch checkedText='|' uncheckedText='〇' size="large" v-model="value2"></sx-switch>
  `,
  setup() {
    const value1 = ref(false);
    const value2 = ref(true);
    return { value1, value2 };
  }
})

const loadingTemplate = () => ({
  components: { sxSwitch },
  template: `
  <sx-switch loading v-model="value1"></sx-switch>
  <sx-switch loading v-model="value2"></sx-switch>
  <br/>
  <br/>
  <sx-switch loading size="large" v-model="value1"></sx-switch>
  <sx-switch loading size="large" v-model="value2"></sx-switch>
  `,
  setup() {
    const value1 = ref(false);
    const value2 = ref(true);
    return { value1, value2 };
  }
})

export const 基本用法 = baseTemplate.bind({});

export const 尺寸 = sizeTemplate.bind({});

export const 不可用 = disabledTemplate.bind({});

export const 带文本 = textTemplate.bind({});

export const 加载中 = loadingTemplate.bind({});