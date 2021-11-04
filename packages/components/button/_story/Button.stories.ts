import SxButton from '../Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: '按钮 Button',
  component: SxButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  // argTypes: {
  //   type:{
  //     control: 'select' ,
  //     options:['default' , 'primary' , 'info' , 'success' , 'warning' , 'error','ghost']
  //   },
  //   size: {
  //     control:'select' ,
  //     options: ['mini','small', 'normal', 'large'],
  //   },
  //   color: { control: 'color' },
  //   textColor: { control: 'color' },
  //   block:{control:'boolean'},
  //   round:{control:'boolean'},
  //   circle:{control:'boolean'},
  //   bordered:{control:'boolean'},
  //   disabled:{control:'boolean'},
  // },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const typeTemplate = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SxButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<div className="btn-margin-right">
                <sx-Button>主要按钮</sx-Button>
                <sx-Button type="secondary">次要按钮</sx-Button>
                <sx-Button type="tertiary">第三按钮</sx-Button>
                <sx-Button type="warning">警告按钮</sx-Button>
                <sx-Button type="danger">危险按钮</sx-Button>
              </div>`,
});

const themeTemplate = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SxButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<div className="btn-margin-right mb-2">
                <sx-Button theme='light'>浅色主要</sx-Button>
                <sx-Button theme='light' type="secondary">浅色次要</sx-Button>
                <sx-Button theme='light' type="tertiary">浅色第三</sx-Button>
                <sx-Button theme='light' type="warning">浅色警告</sx-Button>
                <sx-Button theme='light' type="danger">浅色危险</sx-Button>
              </div>
              <div className="btn-margin-right mb-2">
                <sx-Button theme='solid'>深色主要</sx-Button>
                <sx-Button theme='solid' type="secondary">深色次要</sx-Button>
                <sx-Button theme='solid' type="tertiary">深色第三</sx-Button>
                <sx-Button theme='solid' type="warning">深色警告</sx-Button>
                <sx-Button theme='solid' type="danger">深色危险</sx-Button>
              </div>
              <div className="btn-margin-right mb-2">
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
  template: `<div className="btn-margin-right">
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
  template: `<div className="btn-margin-right">
              <sx-Button block>块级按钮</sx-Button>
            </div>`
})

const disabledTemplate = (args) => ({
  components: { SxButton },
  setup() {
    return { args };
  },
  template: `<div className="btn-margin-right">
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
  template: `<div className="btn-margin-right">
              <sx-Button loading>保存</sx-Button>
              <sx-Button loading type="danger">删除</sx-Button>
            </div>`
})

export const 按钮类型 = typeTemplate.bind({});

export const 按钮主题 = themeTemplate.bind({});

export const 尺寸 = sizeTemplate.bind({});

export const 块级按钮 = blockTemplate.bind({});

export const 禁用状态 = disabledTemplate.bind({});

export const 加载状态 = loadingTemplate.bind({});