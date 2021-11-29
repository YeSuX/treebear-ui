import sxPopConfirm from '../popConfirm'
import sxButton from '../../button/button'

export default {
  title: '反馈类/气泡确认框 popConfirm',
  components: { sxPopConfirm }
}

const baseTemplate = () => ({
  components: { sxButton, sxPopConfirm },
  template: `
    <sx-popConfirm
      title="确定是否要保存此修改？"
      content="此修改将不可逆"
      @onConfirm="onConfirm"
      @onCancel="onCancel">
      <sx-button>显示通知</sx-button>
    </sx-popConfirm>
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