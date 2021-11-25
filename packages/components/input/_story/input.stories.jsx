import sxInput from '../input.vue';
import { ref } from 'vue';

export default {
  title: '输入类/输入框 Input',
  component: sxInput
}

const baseTemplate = () => ({
  components: { sxInput },
  setup() {
    const value = ref('im treebear!');
    return { value };
  },
  template: `
  <sx-input v-model="value"></sx-input>
  {{value}}
  `,
})

const sizeTemplate = () => ({
  components: { sxInput },
  setup() {
  },
  template: `
  <sx-input placeholder='large' size="large"></sx-input>
  <br><br/>
  <sx-input placeholder='default' ></sx-input>
  <br><br/>
  <sx-input placeholder='small' size="small"></sx-input>
  `,
})

const disabledTemplate = () => ({
  components: { sxInput },
  setup() {
    const value1 = ref('enabled input')
    const value2 = ref('disabled input')
    return { value1, value2 }
  },
  template: `
  <sx-input v-model="value1" ></sx-input>
  <br><br/>
  <sx-input v-model="value2" disabled ></sx-input>
  `,
})

const perSufTemplate = () => ({
  components: { sxInput },
  setup() {
  },
  template: `
  <sx-input prefix="Prefix"></sx-input>
  <br><br/>
  <sx-input prefix_icon="sonic_stroked"></sx-input>
  <br><br/>
  <sx-input suffix="Suffix"></sx-input>
  <br><br/>
  <sx-input suffix_icon="sonic_stroked"></sx-input>
  `,
})

const addonTemplate = () => ({
  components: { sxInput },
  setup() {
  },
  template: `
  <sx-input addonBefore="http://" addonAfter=".com"></sx-input>
  `,
})

const clearTemplate = () => ({
  components: { sxInput },
  setup() {
    const value = ref('click to clear');
    return { value }

  },
  template: `
  <sx-input showClear v-model="value"></sx-input>
  `,
})

const passwordTemplate = () => ({
  components: { sxInput },
  setup() {
    const value = ref('1234567');
    return { value }

  },
  template: `
  <sx-input password v-model="value"></sx-input>
  `,
})

const validateStatusTemplate = () => ({
  components: { sxInput },
  setup() {
    const value = ref('1234567');
    return { value }

  },
  template: `
  <sx-input validateStatus='warning' v-model="value"></sx-input>
  <br><br/>
  <sx-input validateStatus='error' v-model="value"></sx-input>
  <br><br/>
  <sx-input v-model="value"></sx-input>
  `,
})

export const 基本 = baseTemplate.bind({});

export const 大小 = sizeTemplate.bind({});

export const 不可用 = disabledTemplate.bind({})

export const 前缀后缀 = perSufTemplate.bind({})

export const 前置后置标签 = addonTemplate.bind({})

export const 带移除标签 = clearTemplate.bind({})

export const 密码模式 = passwordTemplate.bind({})

export const 校验状态 = validateStatusTemplate.bind({})