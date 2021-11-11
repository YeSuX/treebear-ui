// @ts-ignore
import SxSwitch from '../Switch.vue';
import { ref } from 'vue'

export default {
  title: '输入类/开关 Switch',
  component: SxSwitch
}

const baseTemplate = (args) => ({
  components: { SxSwitch },
  template: `
  <sx-Switch v-model="value"></sx-Switch>
  <span>&emsp;{{value}}</span>
  `,
  setup() {
    const value = ref(false);
    return { value };
  }
})

const sizeTemplate = (args) => ({
  components: { SxSwitch },
  template: `
  <sx-Switch size="large" v-model="value"></sx-Switch>
  <sx-Switch size="normal" v-model="value"></sx-Switch>
  <sx-Switch size="small" v-model="value"></sx-Switch>
  `,
  setup() {
    const value = ref(false);
    return { value };
  }
})

const disabledTemplate = (args) => ({
  components: { SxSwitch },
  template: `
  <sx-Switch disabled size="large" v-model="value1"></sx-Switch>
  <sx-Switch disabled v-model="value1"></sx-Switch>
  <sx-Switch disabled size="small" v-model="value1"></sx-Switch>
  <br/>
  <br/>
  <sx-Switch disabled size="large" v-model="value2"></sx-Switch>
  <sx-Switch disabled v-model="value2"></sx-Switch>
  <sx-Switch disabled size="small" v-model="value2"></sx-Switch>
  `,
  setup() {
    const value1 = ref(false);
    const value2 = ref(true);
    return { value1, value2 };
  }
})

const textTemplate = (args) => ({
  components: { SxSwitch },
  template: `
  <sx-Switch checkedText='开' uncheckedText='关' v-model="value1"></sx-Switch>
  <sx-Switch checkedText='|' uncheckedText='〇' v-model="value1"></sx-Switch>
  <br/>
  <br/>
  <sx-Switch checkedText='开' uncheckedText='关' size="large" v-model="value2"></sx-Switch>
  <sx-Switch checkedText='|' uncheckedText='〇' size="large" v-model="value2"></sx-Switch>
  `,
  setup() {
    const value1 = ref(false);
    const value2 = ref(true);
    return { value1, value2 };
  }
})

const loadingTemplate = (args) => ({
  components: { SxSwitch },
  template: `
  <sx-Switch loading v-model="value1"></sx-Switch>
  <sx-Switch loading v-model="value1"></sx-Switch>
  <br/>
  <br/>
  <sx-Switch loading size="large" v-model="value2"></sx-Switch>
  <sx-Switch loading size="large" v-model="value2"></sx-Switch>
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