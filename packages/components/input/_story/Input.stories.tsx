import SxInput from '../Input.vue';
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

export const 基本 = baseTemplate.bind({});

export const 大小 = sizeTemplate.bind({});

export const 不可用 = disabledTemplate.bind({})