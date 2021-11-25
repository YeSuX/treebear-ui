import sxBanner from '../banner.vue';

export default {
  title: '反馈类/通知横幅 Banner',
  component: sxBanner,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'warning', 'danger', 'success'],
      description: '类型，支持 info, success, danger, warning',
    },
    fullMode: {
      control: { type: 'boolean' },
      description:'是否为全屏模式',
      default:'true'
    }
  }
}

const Template = (args) => ({
  components: { sxBanner },
  template: `<sx-banner v-bind="args"></sx-banner>`,
  setup() {
    return { args }
  }
})

const typeTemplate = () => ({
  components: { sxBanner },
  template: `
  <sx-banner type="info" description="我要拉横幅！"></sx-banner>
  <br/>
  <sx-banner type="warning" description="我要拉横幅！"></sx-banner>
  <br/>
  <sx-banner type="danger" description="我要拉横幅！"></sx-banner>
  <br/>
  <sx-banner type="success" description="我要拉横幅！"></sx-banner>
  `,
  setup() {
    return { }
  }
})

const fullTemplate = () => ({
  components: { sxBanner },
  template: `
  <sx-banner :fullMode="false" description="我要拉横幅！"></sx-banner>
  <br/>
  <sx-banner fullMode description="我要拉横幅！"></sx-banner>
  `,
  setup() {
    return {  }
  }
})

export const 通知横幅 = Template.bind({});

export const 类型 = typeTemplate.bind({});

export const 全屏模式 = fullTemplate.bind({});



通知横幅.args = {
  description: '今天星期六，马上就可以休息了！'
}