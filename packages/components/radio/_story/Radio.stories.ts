import SxRadio from '../Radio.vue';
import { ref } from 'vue'

export default {
  title: '单选框 Radio',
  component: SxRadio
}

const BaseTemplate = (args) => ({
  components: { SxRadio },
  template: `<sx-Radio v-model="value">{{value}}</sx-Radio>`,
  setup() {
    const value = ref(false);
    return { value };
  }
})

const ExtraTemplate = (args) => ({
  components: { SxRadio },
  template: `<sx-Radio extra="treeBear-ui 是一个基于vue3的UI组件库">treeBear-ui</sx-Radio>`,
})

const DisabledTemplate = (args) => ({
  components: { SxRadio },
  template: `<div><sx-Radio v-model="value1" disabled>Disabled</sx-Radio></div>
              <div><sx-Radio v-model="value2" disabled>Disabled</sx-Radio></div>`,
  setup() {
    const value1 = ref(false);
    const value2 = ref(true);

    return { value1, value2 }
  }
})

const ModeTemplate = (args) => ({
  components: { SxRadio },
  template: `<sx-Radio 
  v-model="value"
  mode="advanced"
>
  允许取消选择
</sx-Radio>`,
  setup() {
    const value = ref(false);
    return { value };
  }
})

export const 基本用法 = BaseTemplate.bind({});

export const 带辅助文本 = ExtraTemplate.bind({});

export const 禁用 = DisabledTemplate.bind({});

export const 高级模式 = ModeTemplate.bind({});