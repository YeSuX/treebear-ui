import sxIcon from '../icon.vue';

const req = require.context('../svgs', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys()
const re = /\.\/(.*)\.svg/

const svgIcons = requireAll(req).map(i => {
  return i.match(re)[1]
})

export default {
  title: '基础类/图标 Icon',
  component: sxIcon,
};

const baseTemplate = () => ({
  components: { sxIcon },
  setup() {
    return {};
  },
  template: `
  <sx-icon name="alarm"></sx-icon>
  <sx-icon name="activity"></sx-icon>
  <sx-icon name="apps"></sx-icon>
  <sx-icon name="at"></sx-icon>
  <sx-icon name="bolt"></sx-icon>
  `,
});

const sizeTemplate = () => ({
  components: { sxIcon },
  setup() {
    return {};
  },
  template: `
  <sx-icon name="alarm" size="extra-small"></sx-icon>
  <sx-icon name="alarm" size="small"></sx-icon>
  <sx-icon name="alarm"></sx-icon>
  <sx-icon name="alarm" size="large"></sx-icon>
  <sx-icon name="alarm" size="extra-large"></sx-icon>
  `,
});

const colorTemplate = () => ({
  components: { sxIcon },
  setup() {
    return {};
  },
  template: `
  <sx-icon name='alarm' color="red"></sx-icon>
  <sx-icon name='alarm' color="yellow"></sx-icon>
  <sx-icon name='alarm' color="blue"></sx-icon>
  <sx-icon name='alarm' color="green"></sx-icon>
  <sx-icon name='alarm' color="#89bddd"></sx-icon>
  `,
});

const spinTemplate = () => ({
  components: { sxIcon },
  setup() {
    return {};
  },
  template: `
  <sx-icon name='alarm' spin color="red"></sx-icon>
  <sx-icon name='alarm' spin color="yellow"></sx-icon>
  <sx-icon name='alarm' spin color="blue"></sx-icon>
  <sx-icon name='alarm' spin color="green"></sx-icon>
  <sx-icon name='alarm' spin color="#89bddd"></sx-icon>
  `,
});

const totalTemplate = () => ({
  components: { sxIcon },
  setup() {
    const toCopy = (iconText) => {
      const val = document.getElementById(iconText);
      window.getSelection().selectAllChildren(val);
      document.execCommand("Copy");
      alert('已复制  ' + iconText);
    }
    return { svgIcons, toCopy };
  },
  template: `
  <div class="icon-item" style="display:inline-block;margin:10px;" v-for="(icon,key) in svgIcons" :key="key">
    <sx-icon @click="toCopy(icon)" :name="icon" style="display:block;cursor:point;cursor: pointer;"></sx-icon>
    <span :id="icon">{{icon}}</span>
  </div>
  `,
});

export const total = totalTemplate.bind({});
total.storyName = 'icon列表'

export const base = baseTemplate.bind({});
base.storyName = '基本'

export const size = sizeTemplate.bind({});
size.storyName = '尺寸'

export const color = colorTemplate.bind({});
color.storyName = '颜色'

export const spin = spinTemplate.bind({});
spin.storyName = '旋转'