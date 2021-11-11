// @ts-ignore
import SxIcon from '../Icon.vue';

export default {
  title: '基础类/图标 Icon',
  component: SxIcon,
};

const baseTemplate = (args) => ({
  components: { SxIcon },
  setup() {
    return { args };
  },
  template: `<sx-Icon name='alarm'></sx-Icon>`,
});

export const 基本使用 = baseTemplate.bind({});