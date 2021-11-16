import SxBanner from '../Banner.vue';

export default {
  title: '反馈类/通知横幅 Banner',
  component: SxBanner,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'warning', 'danger', 'success'],
      description: '类型，支持 info, success, danger, warning',
      defaultValue: 'info'
    },
    fullMode: {
      control: { type: 'boolean' },
      description:'是否为全屏模式',
      default:'true'
    }
  }
}

const Template = (args) => ({
  components: { SxBanner },
  template: `<sx-Banner v-bind="args"></sx-Banner>`,
  setup() {
    return { args }
  }
})

const typeTemplate = () => ({
  components: { SxBanner },
  template: `
  <sx-Banner type="info" description="我要拉横幅！"></sx-Banner>
  <br></br>
  <sx-Banner type="warning" description="我要拉横幅！"></sx-Banner>
  <br></br>
  <sx-Banner type="danger" description="我要拉横幅！"></sx-Banner>
  <br></br>
  <sx-Banner type="success" description="我要拉横幅！"></sx-Banner>
  `,
  setup() {
    return { }
  }
})

const fullTemplate = () => ({
  components: { SxBanner },
  template: `
  <sx-Banner :fullMode="false" description="我要拉横幅！"></sx-Banner>
  <br></br>
  <sx-Banner fullMode description="我要拉横幅！"></sx-Banner>
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