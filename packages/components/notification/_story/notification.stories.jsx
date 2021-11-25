import sxNotification from '../notification'
import sxButton from '../../button/button'

export default {
  title: '反馈类/通知 Notification'
}

const baseTemplate = () => ({
  components: { sxButton },
  template: `
    <sx-button @click="open">显示通知</sx-button>
  `,
  setup() {
    const open = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。'
      })
    }
    return { open }
  }
})

export const base = baseTemplate.bind({});
base.storyName = "通知"

