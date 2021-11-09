// @ts-ignore
import SxRating from '../Rating.vue';
import { ref } from 'vue'

export default {
  title: '输入类/评分 Rating',
  component: SxRating
}

const baseTemplate = (args) => ({
  components: { SxRating },
  template: `<sx-Rating v-model="value"></sx-Rating>`,
  setup() {
    const value = ref(3);
    return { value };
  }
})

const maxTemplate = (args) => ({
  components: { SxRating },
  template: `<sx-Rating :max="10" v-model="value"></sx-Rating>`,
  setup() {
    const value = ref(3);
    return { value };
  }
})

const disabledTemplate = (args) => ({
  components: { SxRating },
  template: `<sx-Rating disabled v-model="value"></sx-Rating>`,
  setup() {
    const value = ref(3);
    return { value };
  }
})

const halfTemplate = (args) => ({
  components: { SxRating },
  template: `<sx-Rating allowHalf disabled v-model="value"></sx-Rating><span>{{value}}</span>
            <div>目前仅只读，不允许编辑（待开发ing）</div>`,
  setup() {
    const value = ref(3.65);
    return { value };
  }
})

const allowClearTemplate = (args) => ({
  components: { SxRating },
  template: `<sx-Rating allowClear v-model="value"></sx-Rating>`,
  setup() {
    const value = ref(3);
    return { value };
  }
})

const characterTemplate = (args) => ({
  components: { SxRating },
  template: `<sx-Rating character="赞" v-model="value"></sx-Rating>`,
  setup() {
    const value = ref(3);
    return { value };
  }
})

const textTemplate = (args) => ({
  components: { SxRating },
  template: `
  <sx-Rating showText v-model="value1"></sx-Rating>
  <br/>
  <sx-Rating showText :texts="texts" v-model="value2"></sx-Rating>
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


