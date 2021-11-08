// @ts-ignore
import SxRating from '../Rating.vue';
import { ref } from 'vue'

export default {
  title: '输入类/评分 Rating',
  component: SxRating
}

const baseTemplate = (args) => ({
  components: { SxRating },
  template: `<sx-Rating v-model="value">{{value}}</sx-Rating>`,
  setup() {
    const value = ref(false);
    return { value };
  }
})

export const 基本用法 = baseTemplate.bind({});
