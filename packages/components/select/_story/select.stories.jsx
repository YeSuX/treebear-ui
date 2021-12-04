import sxSelect from '../select.vue';
import { ref } from 'vue'

export default {
  title: '输入类/选择器 Select',
  components: { sxSelect }
}

const baseTemplate = () => ({
  components: { sxSelect },
  template: `
  <sx-select v-model="value">
    <option value='apple'>苹果</option>
    <option value='banana'>香蕉</option>
    <option value='pear'>梨</option>
  </sx-select>
  </br>
  </br>
  <sx-select v-model="value" disabled>
    <option value='apple'>苹果</option>
    <option value='banana'>香蕉</option>
    <option value='pear'>梨</option>
  </sx-select>
  </br>
  </br>
  <sx-select v-model="value2" placeholder="请选择">
    <option value='apple'>苹果</option>
    <option value='banana'>香蕉</option>
    <option value='pear'>梨</option>
  </sx-select>
  `,
  setup() {
    const value = ref('apple');
    const value2 = ref('');
    return { value, value2 }
  }
})

export const base = baseTemplate.bind({})
base.storyName = '基本使用';