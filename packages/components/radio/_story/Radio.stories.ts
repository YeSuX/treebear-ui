// @ts-ignore
import SxRadio from '../Radio.vue';
import SxRadioGroup from '../RadioGroup.vue';
import { ref } from 'vue'

export default {
  title: '2_输入类/单选框 Radio',
  component: SxRadio
}

const baseTemplate = (args) => ({
  components: { SxRadio },
  template: `<sx-Radio v-model="value">{{value}}</sx-Radio>`,
  setup() {
    const value = ref(false);
    return { value };
  }
})

const extraTemplate = (args) => ({
  components: { SxRadio },
  template: `<sx-Radio extra="treeBear-ui 是一个基于vue3的UI组件库">treeBear-ui</sx-Radio>`,
})

const disabledTemplate = (args) => ({
  components: { SxRadio },
  template: `<div><sx-Radio v-model="value1" disabled>Disabled</sx-Radio></div>
              <div><sx-Radio v-model="value2" disabled>Disabled</sx-Radio></div>`,
  setup() {
    const value1 = ref(false);
    const value2 = ref(true);

    return { value1, value2 }
  }
})

const modeTemplate = (args) => ({
  components: { SxRadio },
  template: `<sx-Radio 
  v-model="value"
  mode="advanced"
>
  允许取消选择--{{value}}
</sx-Radio>`,
  setup() {
    const value = ref(false);
    return { value };
  }
})

const groupTemplate = (args) => ({
  components: { SxRadio,SxRadioGroup },
  template: `
  <sx-RadioGroup v-model="value">
  <sx-Radio label=1>A</sx-Radio>
  <sx-Radio label=2>B</sx-Radio>
  <sx-Radio label=3>C</sx-Radio>
  <sx-Radio label=4>D</sx-Radio>
  </sx-RadioGroup>
  `,
  setup() {
    const value = ref("1");
    return { value };
  }
})

const directionTemplate = (args) => ({
  components: { SxRadio,SxRadioGroup },
  template: `
  <sx-RadioGroup direction="vertical" v-model="value">
  <sx-Radio label=1>A</sx-Radio>
  <sx-Radio label=2>B</sx-Radio>
  <sx-Radio label=3>C</sx-Radio>
  <sx-Radio label=4>D</sx-Radio>
  </sx-RadioGroup>
  `,
  setup() {
    const value = ref("1");
    return { value };
  }
})

export const 基本用法 = baseTemplate.bind({});

export const 带辅助文本 = extraTemplate.bind({});

export const 禁用 = disabledTemplate.bind({});

export const 高级模式 = modeTemplate.bind({});

export const 单选组合_开发ing = groupTemplate.bind({});

export const 垂直排列_开发ing = directionTemplate.bind({});

