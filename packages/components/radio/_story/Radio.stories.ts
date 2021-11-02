import SxRadio from '../Radio.vue';
import { ref } from 'vue'

export default {
  title: '单选框 Radio',
  component: SxRadio
}

const radioTemplate = (args) => ({
  components: { SxRadio },
  template: `<sx-Radio v-model="value">{{value}}</sx-Radio>`,
  setup() {
    const value = ref(true);
    return { value };
  }
})

export const Radio = radioTemplate.bind({});