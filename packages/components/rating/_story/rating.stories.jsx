// @ts-ignore
import sxRating from '../rating.vue';
import { ref } from 'vue'

export default {
  title: '输入类/评分 Rating',
  component: sxRating
}

const baseTemplate = () => ({
  components: { sxRating },
  template: `<sx-rating v-model="value"></sx-rating>`,
  setup() {
    const value = ref(3);
    return { value };
  }
})

const maxTemplate = () => ({
  components: { sxRating },
  template: `<sx-rating :max="10" v-model="value"></sx-rating>`,
  setup() {
    const value = ref(3);
    return { value };
  }
})

const disabledTemplate = () => ({
  components: { sxRating },
  template: `<sx-rating disabled v-model="value"></sx-rating>`,
  setup() {
    const value = ref(3);
    return { value };
  }
})

const halfTemplate = () => ({
  components: { sxRating },
  template: `<sx-rating allowHalf disabled v-model="value"></sx-rating><span>{{value}}</span>
            <div>目前仅只读，不允许编辑（待开发ing）</div>`,
  setup() {
    const value = ref(3.65);
    return { value };
  }
})

const allowClearTemplate = () => ({
  components: { sxRating },
  template: `<sx-rating allowClear v-model="value"></sx-rating>`,
  setup() {
    const value = ref(3);
    return { value };
  }
})

const characterTemplate = () => ({
  components: { sxRating },
  template: `<sx-rating character="赞" v-model="value"></sx-rating>`,
  setup() {
    const value = ref(3);
    return { value };
  }
})

const textTemplate = () => ({
  components: { sxRating },
  template: `
  <sx-rating showText v-model="value1"></sx-rating>
  <br/>
  <sx-rating showText :texts="texts" v-model="value2"></sx-rating>
  `,
  setup() {
    const value1 = ref(3);
    const value2 = ref(3);
    const texts = ['我', '感到', '真的', '很', '糟糕']
    return { value1, value2, texts };
  }
})

export const 基本用法 = baseTemplate.bind({});

export const 最大分值 = maxTemplate.bind({});

export const 只读 = disabledTemplate.bind({});

export const 半星 = halfTemplate.bind({});

export const 点击清除 = allowClearTemplate.bind({});

export const 自定义字符 = characterTemplate.bind({});

export const 辅助文字 = textTemplate.bind({});