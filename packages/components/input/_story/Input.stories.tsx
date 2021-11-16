import SxInput from '../Input.vue';
import SxIcon from '../../icon/Icon.vue';

import { ref } from 'vue';

export default {
  title: '输入类/输入框 Input',
  component: SxInput
}

const baseTemplate = () => ({
  components: { SxInput },
  setup() {
    const value = ref('im treebear!');
    return { value };
  },
  template: `
  <sx-Input v-model="value"></sx-Input>
  {{value}}
  `,
})

const sizeTemplate = () => ({
  components: { SxInput },
  setup() {
  },
  template: `
  <sx-Input placeholder='large' size="large"></sx-Input>
  <br><br/>
  <sx-Input placeholder='default' ></sx-Input>
  <br><br/>
  <sx-Input placeholder='small' size="small"></sx-Input>
  `,
})

const disabledTemplate = () => ({
  components: { SxInput },
  setup() {
    const value1 = ref('enabled input')
    const value2 = ref('disabled input')
    return { value1, value2 }
  },
  template: `
  <sx-Input v-model="value1" ></sx-Input>
  <br><br/>
  <sx-Input v-model="value2" disabled ></sx-Input>
  `,
})

const perSufTemplate = () => ({
  components: { SxInput },
  setup() {
  },
  template: `
  <sx-Input prefix="Prefix"></sx-Input>
  <br><br/>
  <sx-Input prefix_icon="sonic_stroked"></sx-Input>
  <br><br/>
  <sx-Input suffix="Suffix"></sx-Input>
  <br><br/>
  <sx-Input suffix_icon="sonic_stroked"></sx-Input>
  `,
})

const addonTemplate = () => ({
  components: { SxInput },
  setup() {
  },
  template: `
  <sx-Input addonBefore="http://" addonAfter=".com"></sx-Input>
  `,
})

const clearTemplate = () => ({
  components: { SxInput },
  setup() {
    const value = ref('click to clear');
    return { value }

  },
  template: `
  <sx-Input showClear v-model="value"></sx-Input>
  `,
})

const passwordTemplate = () => ({
  components: { SxInput },
  setup() {
    const value = ref('1234567');
    return { value }

  },
  template: `
  <sx-Input password v-model="value"></sx-Input>
  `,
})

const validateStatusTemplate = () => ({
  components: { SxInput },
  setup() {
    const value = ref('1234567');
    return { value }

  },
  template: `
  <sx-Input validateStatus='warning' v-model="value"></sx-Input>
  <br><br/>
  <sx-Input validateStatus='error' v-model="value"></sx-Input>
  <br><br/>
  <sx-Input v-model="value"></sx-Input>
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



