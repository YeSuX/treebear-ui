import sxRadio from '../radio.vue'
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

export const base = baseTemplate.bind({})
base.storyName = '基本使用';