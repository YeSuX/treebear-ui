// @ts-ignore
import SxButton from '../Button.vue';
import SxButtonGroup from '../ButtonGroup.vue';

export default {
  title: '输入类/按钮 Button',
  component: SxButton,
};

const baseTemplate = (args) => ({
  components: { SxButton },
  setup() {
    return { args };
  },
  template: `<sx-Button>基本按钮</sx-Button>`,
});

const typeTemplate = (args) => ({
  components: { SxButton },
  setup() {
    return { args };
  },
  template: `<div class="btn-margin-right">
                <sx-Button>主要按钮</sx-Button>
                <sx-Button type="secondary">次要按钮</sx-Button>
                <sx-Button type="tertiary">第三按钮</sx-Button>
                <sx-Button type="warning">警告按钮</sx-Button>
                <sx-Button type="danger">危险按钮</sx-Button>
              </div>`,
});

const themeTemplate = (args) => ({
  components: { SxButton },
  setup() {
    return { args };
  },
  template: `<div class="btn-margin-right mb-2">
                <sx-Button theme='light'>浅色主要</sx-Button>
                <sx-Button theme='light' type="secondary">浅色次要</sx-Button>
                <sx-Button theme='light' type="tertiary">浅色第三</sx-Button>
                <sx-Button theme='light' type="warning">浅色警告</sx-Button>
                <sx-Button theme='light' type="danger">浅色危险</sx-Button>
              </div>
              <div class="btn-margin-right mb-2">
                <sx-Button theme='solid'>深色主要</sx-Button>
                <sx-Button theme='solid' type="secondary">深色次要</sx-Button>
                <sx-Button theme='solid' type="tertiary">深色第三</sx-Button>
                <sx-Button theme='solid' type="warning">深色警告</sx-Button>
                <sx-Button theme='solid' type="danger">深色危险</sx-Button>
              </div>
              <div class="btn-margin-right mb-2">
                <sx-Button theme='borderless'>主要</sx-Button>
                <sx-Button theme='borderless' type="secondary">次要</sx-Button>
                <sx-Button theme='borderless' type="tertiary">第三</sx-Button>
                <sx-Button theme='borderless' type="warning">警告</sx-Button>
                <sx-Button theme='borderless' type="danger">危险</sx-Button>
              </div>`,
});

const sizeTemplate = (args) => ({
  components: { SxButton },
  setup() {
    return { args };
  },
  template: `<div class="btn-margin-right">
              <sx-Button size='large'>大尺寸</sx-Button>
              <sx-Button size='default'>默认尺寸</sx-Button>
              <sx-Button size='small'>小尺寸</sx-Button>
            </div>`
})

const blockTemplate = (args) => ({
  components: { SxButton },
  setup() {
    return { args };
  },
  template: `<div class="btn-margin-right">
              <sx-Button block>块级按钮</sx-Button>
            </div>`
})

const disabledTemplate = (args) => ({
  components: { SxButton },
  setup() {
    return { args };
  },
  template: `<div class="btn-margin-right">
              <sx-Button disabled>禁用</sx-Button>
              <sx-Button disabled theme="borderless">无背景禁用</sx-Button>
              <sx-Button disabled theme="light">浅色禁用</sx-Button>
              <sx-Button disabled theme="borderless" type="primary">无背景主要禁用</sx-Button>
              <sx-Button disabled theme="solid" type="warning">深色警告禁用</sx-Button>
            </div>`
})

const loadingTemplate = (args) => ({
  components: { SxButton },
  setup() {
    return { args };
  },
  template: `<div class="btn-margin-right">
              <sx-Button loading>保存</sx-Button>
              <sx-Button loading type="danger">删除</sx-Button>
            </div>`
})

const iconTemplate = (args) => ({
  components: { SxButton },
  setup() {
    return { args };
  },
  template: `<div class="btn-margin-right">
              <sx-Button icon="faceu_logo"></sx-Button>
              <sx-Button icon="moon">夜间</sx-Button>
            </div>`
})

const groupSizeTemplate = (args) => ({
  components: { SxButton,SxButtonGroup },
  setup() {
    return { args };
  },
  template: `<div class="sx--flex">
            <sx-Button-Group size="large" class="mr-2">
              <sx-Button>拷贝</sx-Button>
              <sx-Button>查询</sx-Button>
              <sx-Button>剪切</sx-Button>
            </sx-Button-Group>
            <sx-Button-Group size="default" class="mr-2">
              <sx-Button>拷贝</sx-Button>
              <sx-Button>查询</sx-Button>
              <sx-Button>剪切</sx-Button>
            </sx-Button-Group>
            <sx-Button-Group size="small" class="mr-2">
              <sx-Button>拷贝</sx-Button>
              <sx-Button>查询</sx-Button>
              <sx-Button>剪切</sx-Button>
            </sx-Button-Group>
            </div>`
})

const groupDisabledTemplate = (args) => ({
  components: { SxButton,SxButtonGroup },
  setup() {
    return { args };
  },
  template: `<sx-Button-Group disabled>
              <sx-Button>拷贝</sx-Button>
              <sx-Button>查询</sx-Button>
              <sx-Button>剪切</sx-Button>
            </sx-Button-Group>`
})

const groupTypeTemplate = (args) => ({
  components: { SxButton,SxButtonGroup },
  setup() {
    return { args };
  },
  template: `<div class="sx--flex">
            <sx-Button-Group type="primary" class="mr-2">
              <sx-Button>拷贝</sx-Button>
              <sx-Button>查询</sx-Button>
              <sx-Button>剪切</sx-Button>
            </sx-Button-Group>
            <sx-Button-Group type="secondary" class="mr-2">
              <sx-Button>拷贝</sx-Button>
              <sx-Button>查询</sx-Button>
              <sx-Button>剪切</sx-Button>
            </sx-Button-Group>
            <sx-Button-Group type="tertiary" class="mr-2">
              <sx-Button>拷贝</sx-Button>
              <sx-Button>查询</sx-Button>
              <sx-Button>剪切</sx-Button>
            </sx-Button-Group>
            <sx-Button-Group type="warning" class="mr-2">
              <sx-Button>拷贝</sx-Button>
              <sx-Button>查询</sx-Button>
              <sx-Button>剪切</sx-Button>
            </sx-Button-Group>
            <sx-Button-Group type="danger" class="mr-2">
              <sx-Button>拷贝</sx-Button>
              <sx-Button>查询</sx-Button>
              <sx-Button>剪切</sx-Button>
            </sx-Button-Group>
            </div>`
})

const groupThemeTemplate = (args) => ({
  components: { SxButton,SxButtonGroup },
  setup() {
    return { args };
  },
  template: `<div class="sx--flex">
            <sx-Button-Group theme="light" class="mr-2">
              <sx-Button>拷贝</sx-Button>
              <sx-Button>查询</sx-Button>
              <sx-Button>剪切</sx-Button>
            </sx-Button-Group>
            <sx-Button-Group theme="borderless" class="mr-2">
              <sx-Button>拷贝</sx-Button>
              <sx-Button>查询</sx-Button>
              <sx-Button>剪切</sx-Button>
            </sx-Button-Group>
            </div>`
})

export const 基本按钮 = baseTemplate.bind({});

export const 按钮类型 = typeTemplate.bind({});

export const 按钮主题 = themeTemplate.bind({});

export const 尺寸 = sizeTemplate.bind({});

export const 块级按钮 = blockTemplate.bind({});

export const 禁用状态 = disabledTemplate.bind({});

export const 加载状态 = loadingTemplate.bind({});

export const 图标按钮 = iconTemplate.bind({});

export const 组合尺寸 = groupSizeTemplate.bind({});

export const 组合禁用 = groupDisabledTemplate.bind({});

export const 组合类型 = groupTypeTemplate.bind({});

export const 组合主题 = groupThemeTemplate.bind({});


