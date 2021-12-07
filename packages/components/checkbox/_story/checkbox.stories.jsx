import sxCheckbox from '../checkbox.vue';
import sxCheckboxGroup from '../checkboxGroup.vue'
import { ref, reactive } from 'vue'

export default {
  title: '输入类/复选框 Checkbox',
  components: { sxCheckbox }
}

const baseTemplate = () => ({
  components: { sxCheckbox },
  template: `
    <sx-checkbox v-model="checked1">treebear-ui--{{checked1}}</sx-checkbox>
    <sx-checkbox v-model="checked2">treebear-ui--{{checked2}}</sx-checkbox>
  `,
  setup() {
    const checked1 = ref(false);
    const checked2 = ref(true);

    return { checked1, checked2 }
  }
})

const extraTemplate = () => ({
  components: { sxCheckbox },
  template: `
    <sx-checkbox v-model="checked" extra="要想提高，要想宁日，总得连根的拔去了“二重思想”。由于天下尽管不小，但彷徨的人种，是终竟寻不出座标的。"
      >treebear-ui--{{checked}}</sx-checkbox>
  `,
  setup() {
    const checked = ref(false);

    return { checked }
  }
})

const disabledTemplate = () => ({
  components: { sxCheckbox },
  template: `
    <sx-checkbox v-model="checked1" disabled>treebear-ui--{{checked1}}</sx-checkbox>
    <sx-checkbox v-model="checked2" disabled>treebear-ui--{{checked2}}</sx-checkbox>
  `,
  setup() {
    const checked1 = ref(false);
    const checked2 = ref(true);

    return { checked1, checked2 }
  }
})

const groupTemplate = () => ({
  components: { sxCheckbox, sxCheckboxGroup },
  template: `
    <sx-checkbox-group v-model="checkList">
      <sx-checkbox value="a">复选框 A</sx-checkbox>
      <sx-checkbox value="b">复选框 B</sx-checkbox>
      <sx-checkbox value="c">复选框 C</sx-checkbox>
      <sx-checkbox value="d">复选框 D</sx-checkbox>
    </sx-checkbox-group>
    <div>{{checkList}}</div>
  `,
  setup() {
    const checkList = ref(['a', 'b', 'd']);
    return { checkList }
  }
})

const directionTemplate = () => ({
  components: { sxCheckbox, sxCheckboxGroup },
  template: `
    <sx-checkbox-group direction='horizontal' v-model="checkList">
      <sx-checkbox value="a">复选框 A</sx-checkbox>
      <sx-checkbox value="b">复选框 B</sx-checkbox>
      <sx-checkbox value="c">复选框 C</sx-checkbox>
      <sx-checkbox value="d">复选框 D</sx-checkbox>
    </sx-checkbox-group>
    <div>{{checkList}}</div>
  `,
  setup() {
    const checkList = ref(['a', 'b', 'd']);
    return { checkList }
  }
})

export const base = baseTemplate.bind({})
base.storyName = '基本使用';
export const extra = extraTemplate.bind({})
extra.storyName = '辅助文本';
export const disabled = disabledTemplate.bind({})
disabled.storyName = '禁用';
export const group = groupTemplate.bind({})
group.storyName = '复选框组';
export const direction = directionTemplate.bind({})
direction.storyName = '水平排列';