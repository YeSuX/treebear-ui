import sxNotification from '../notification'
import sxButton from '../../button/button'
import sxButtonGroup from '../../button/buttonGroup'

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

const positionTemplate = () => ({
  components: { sxButton, sxButtonGroup },
  template: `
    <sx-button-group class="mb-2">
      <sx-button @click="openTop">top</sx-button>
      <sx-button @click="openTopLeft">topLeft</sx-button>
      <sx-button @click="openTopRight">topRight</sx-button>
    </sx-button-group>
    <sx-button-group>
      <sx-button @click="openBottom">bottom</sx-button>
      <sx-button @click="openBottomLeft">bottomLeft</sx-button>
      <sx-button @click="openBottomRight">bottomRight</sx-button>
    </sx-button-group>
  `,
  setup() {
    const openTop = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        position: 'top'
      })
    }
    const openTopLeft = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        position: 'topLeft'
      })
    }
    const openTopRight = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        position: 'topRight'
      })
    }
    const openBottom = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        position: 'bottom'
      })
    }
    const openBottomLeft = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        position: 'bottomLeft'
      })
    }
    const openBottomRight = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        position: 'bottomRight'
      })
    }
    return { openTop, openTopLeft, openTopRight, openBottom, openBottomLeft, openBottomRight }
  }
})

const iconTemplate = () => ({
  components: { sxButton },
  template: `
    <p>默认的图标</p>
    <sx-button class="mr-2" @click="open1">info</sx-button>
    <sx-button class="mr-2" @click="open2" type="secondary">success</sx-button>
    <sx-button class="mr-2" @click="open3" type="warning">warning</sx-button>
    <sx-button class="mr-2" @click="open4" type="danger">danger</sx-button>
    <p>自定义图标</p>
    <sx-button @click="open5" icon="crown"></sx-button>
  `,
  setup() {
    const open1 = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        type: 'info'
      })
    }
    const open2 = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        type: 'success'
      })
    }
    const open3 = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        type: 'warning'
      })
    }
    const open4 = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        type: 'danger'
      })
    }
    const open5 = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        icon: 'crown'
      })
    }
    return { open1, open2, open3, open4, open5 }
  }
})

const themeTemplate = () => ({
  components: { sxButton },
  template: `
  <sx-button class="mr-2" @click="open1">info</sx-button>
  <sx-button class="mr-2" @click="open2" type="secondary">success</sx-button>
  <sx-button class="mr-2" @click="open3" type="warning">warning</sx-button>
  <sx-button class="mr-2" @click="open4" type="danger">danger</sx-button>
  `,
  setup() {
    const open1 = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        type: 'info',
        theme: 'light'
      })
    }
    const open2 = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        type: 'success',
        theme: 'light'
      })
    }
    const open3 = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        type: 'warning',
        theme: 'light'
      })
    }
    const open4 = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        type: 'danger',
        theme: 'light'
      })
    }
    return { open1, open2, open3, open4 }
  }
})

const timeTemplate = () => ({
  components: { sxButton },
  template: `
    <p>自定义时长 10s，默认时长为 3s</p>
    <sx-button @click="open">十秒钟后关闭</sx-button>
  `,
  setup() {
    const open = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        duration: 10
      })
    }
    return { open }
  }
})

const closeTemplate = () => ({
  components: { sxButton },
  template: `
    <p>设置 duration 为 -1 时，通知将不会自动关闭，此时只能手动关闭。</p>
    <sx-button @click="open">显示通知</sx-button>
  `,
  setup() {
    const open = () => {
      sxNotification({
        title: '通知标题',
        content: '通知内容：今天天气真不错，只是眼里有条河。',
        duration: -1
      })
    }
    return { open }
  }
})

export const base = baseTemplate.bind({});
base.storyName = "通知"

export const position = positionTemplate.bind({});
position.storyName = "不同位置弹出"

export const icon = iconTemplate.bind({});
icon.storyName = "带有图标的通知"

export const theme = themeTemplate.bind({});
theme.storyName = "多色样式"

export const time = timeTemplate.bind({});
time.storyName = "修改延时"

export const close = closeTemplate.bind({});
close.storyName = "手动关闭"

