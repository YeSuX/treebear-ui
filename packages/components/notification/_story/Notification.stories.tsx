import SxNotification from '../Notification.vue';
import SxButton from '../../button/Button.vue';

export default {
  title: '反馈类/通知 Notification',
  component: SxNotification,
  argTypes: {

  }
}

const Template = (args) => ({
  components: { SxNotification },
  template: `<sx-notification v-bind="args"></sx-notification>`,
  setup() {
    return { args }
  }
})

const baseTemplate = () => ({
  components: { SxNotification, SxButton },
  template: `
  <sx-button @click="open">可自动关闭</sx-button>
  `,
  setup() {
    const open = () => {
      this.$notify({
        title: '标题',
        message: '这是一条通知',
        duration: 3
      })
    }
    return {
      open
    }
  }
})

export const 通知横幅 = Template.bind({});

export const 普通通知 = baseTemplate.bind({});
