// @ts-ignore
import SxIcon from '../Icon.vue';

const req = require.context('../svgs', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys()
const re = /\.\/(.*)\.svg/

const svgIcons = requireAll(req).map(i => {
  return i.match(re)[1]
})

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

const sizeTemplate = (args) => ({
  components: { SxIcon },
  setup() {
    return { args };
  },
  template: `
  <sx-Icon name='alarm' size="extra-small"></sx-Icon>
  <sx-Icon name='alarm' size="small"></sx-Icon>
  <sx-Icon name='alarm'></sx-Icon>
  <sx-Icon name='alarm' size="large"></sx-Icon>
  <sx-Icon name='alarm' size="extra-large"></sx-Icon>
  `,
});

const spinTemplate = (args) => ({
  components: { SxIcon },
  setup() {
    return { args };
  },
  template: `
  <sx-Icon name='alarm' spin></sx-Icon>
  <sx-Icon name='spin' spin></sx-Icon>
  `,
});

const colorTemplate = (args) => ({
  components: { SxIcon },
  setup() {
    return { args };
  },
  template: `
  <sx-Icon name='alarm' color="red"></sx-Icon>
  <sx-Icon name='alarm' color="yellow"></sx-Icon>
  <sx-Icon name='alarm' color="blue"></sx-Icon>
  <sx-Icon name='alarm' color="green"></sx-Icon>
  <sx-Icon name='alarm' color="#89bddd"></sx-Icon>
  `,
});

const totalTemplate = () => ({
  components: { SxIcon },
  setup() {
    const toCopy = (iconText) => {
      const val = document.getElementById(iconText);
      window.getSelection().selectAllChildren(val);
      document.execCommand("Copy");
      alert('已复制  '+iconText);
    }
    return { svgIcons, toCopy };
  },
  template: `
  <div class="icon-item" style="display:inline-block;margin:10px;" v-for="(icon,key) in svgIcons" :key="key">
    <sx-Icon @click="toCopy(icon)" :name="icon" color="blue" style="display:block;cursor:point;cursor: pointer;"></sx-Icon>
    <span :id="icon">{{icon}}</span>
  </div>
  `,
});

export const 基本使用 = baseTemplate.bind({});

export const 尺寸 = sizeTemplate.bind({});

export const 旋转 = spinTemplate.bind({});

export const 颜色 = colorTemplate.bind({});

export const 图标汇总 = totalTemplate.bind({})