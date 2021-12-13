import sxRadio from '../radio.vue'
import sxButton from '../../button/button.vue'
import sxButtonGroup from '../radioGroup.vue'
import { ref } from 'vue'

export default {
  title: '输入类/单选框 Radio',
  components: { sxRadio }
}

const baseTemplate = () => ({
  components: { sxRadio },
  template: `
    <sx-radio v-model="checked1">treebear-ui--{{checked1}}</sx-radio>
    <br/>
    <sx-radio v-model="checked2">treebear-ui--{{checked2}}</sx-radio>
  `,
  setup() {
    const checked1 = ref(false);
    const checked2 = ref(true);

    return { checked1, checked2 }
  }
})

const extraTemplate = () => ({
  components: { sxRadio },
  template: `
    <sx-radio v-model="checked1" extra="要想提高，要想宁日，总得连根的拔去了“二重思想”。由于天下尽管不小，但彷徨的人种，是终竟寻不出座标的。"
      >treebear-ui--{{checked1}}</sx-radio>
  `,
  setup() {
    const checked1 = ref(false);

    return { checked1 }
  }
})

const disabledTemplate = () => ({
  components: { sxRadio, sxButton },
  template: `
  <sx-radio :disabled="disabled" v-model="checked1">treebear-ui--{{checked1}}</sx-radio>
  <br/>
  <sx-radio :disabled="disabled" v-model="checked2">treebear-ui--{{checked2}}</sx-radio>
  <br/>
  <sx-button @click="handleClick">控制禁用</sx-button>
  `,
  setup() {
    const checked1 = ref(false);
    const checked2 = ref(true);
    const disabled = ref(true);
    const handleClick = () => {
      disabled.value = !disabled.value;
    }

    return { checked1, checked2, disabled, handleClick }
  }
})

const advancedTemplate = () => ({
  components: { sxRadio },
  template: `
    <sx-radio v-model="checked1" advanced>允许取消选择--{{checked1}}</sx-radio>
  `,
  setup() {
    const checked1 = ref(false);

    return { checked1 }
  }
})

const groupTemplate = () => ({
  components: { sxRadio, sxButtonGroup },
  template: `
    <sx-button-group v-model="checkedValue">
      <sx-radio value="a">单选框 A</sx-radio>
      <sx-radio value="b">单选框 B</sx-radio>
      <sx-radio value="c">单选框 C</sx-radio>
    </sx-button-group>
    {{checkedValue}}
  `,
  setup() {
    const checkedValue = ref('b');

    return { checkedValue }
  }
})

export const base = baseTemplate.bind({})
base.storyName = '基本使用';

export const extra = extraTemplate.bind({})
extra.storyName = '带辅助文本';

export const disabled = disabledTemplate.bind({})
disabled.storyName = '禁用';

export const advanced = advancedTemplate.bind({})
advanced.storyName = '允许取消选择';

// export const group = groupTemplate.bind({})
// group.storyName = '单选组合';