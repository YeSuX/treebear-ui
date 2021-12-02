import sxProgress from '../progress.vue'
import sxButton from '../../button/button.vue'
import { ref } from "@vue/reactivity";

export default {
  title: '反馈类/进度条 Progress',
  components: { sxProgress }
}

const baseTemplate = () => ({
  components: { sxProgress },
  template: `
    <div>通过stroke属性来控制进度条的填充色</div>
    <div>通过percent属性控制已完成的进度</div>
    <div>通过size属性控制进度条尺寸</div>
    <div>如果size预设的尺寸不满足，可以通过style传入 height 自定义进度条高度</div>

    <div style="width: 200px">
      <sx-progress :percent="10" stroke="#fc8800"></sx-progress>
      <sx-progress :percent="25" stroke="#f93920"></sx-progress>
      <sx-progress :percent="50"></sx-progress>
      <sx-progress :percent="80"></sx-progress>
      <sx-progress :percent="80" size="large"></sx-progress>
      <sx-progress :percent="80" style="height: 8px"></sx-progress>
    </div>
  `,
  setup() {
  }
})

const textTemplate = () => ({
  components: { sxProgress },
  template: `
    <div>通过showInfo控制是否展示百分比数字，可以通过format格式化展示文本</div>

    <div style="width: 200px">
      <sx-progress :percent="10" stroke="#fc8800" showInfo></sx-progress>
      <br/>
      <sx-progress :percent="25" stroke="#f93920" showInfo></sx-progress>
      <br/>
      <sx-progress :percent="50" showInfo></sx-progress>
      <br/>
      <sx-progress :percent="80" showInfo></sx-progress>
    </div>
  `,
  setup() {
  }
})

const directionTemplate = () => ({
  components: { sxProgress },
  template: `
    <div>通过stroke属性来控制进度条的填充色</div>

    <div style="height: 100px;display:flex;">
      <sx-progress :percent="10" direction="vertical" stroke="#fc8800"></sx-progress>
      <sx-progress :percent="25" direction="vertical" stroke="#f93920"></sx-progress>
      <sx-progress :percent="50" direction="vertical"></sx-progress>
      <sx-progress :percent="80" direction="vertical" size="large"></sx-progress>
      <sx-progress :percent="80" direction="vertical" style="width: 8px"></sx-progress>
    </div>
  `,
  setup() {
  }
})

const circleTemplate = () => ({
  components: { sxProgress },
  template: `
    <div>将 type 设为circle，进度条将会展示成环状。进度条默认尺寸为 72 x 72</div>

    <div>
      <sx-progress :percent="10" type="circle" style=" margin: 5px "></sx-progress>
      <sx-progress :percent="25" type="circle" style=" margin: 5px "></sx-progress>
      <sx-progress :percent="50" type="circle" style=" margin: 5px "></sx-progress>
      <sx-progress :percent="80" type="circle" style=" margin: 5px "></sx-progress>
    </div>
  `,
  setup() {
  }
})

const smallTemplate = () => ({
  components: { sxProgress },
  template: `
    <div>小号进度条默认尺寸为 24 x 24(精度处理有问题，待处理)</div>

    <div>
      <sx-progress :percent="10" size="small" type="circle" style=" margin: 5px "></sx-progress>
      <sx-progress :percent="25" size="small" type="circle" style=" margin: 5px "></sx-progress>
      <sx-progress :percent="50" size="small" type="circle" style=" margin: 5px "></sx-progress>
      <sx-progress :percent="80" size="small" type="circle" style=" margin: 5px "></sx-progress>
    </div>
  `,
  setup() {
  }
})

// const setPercentTemplate = () => ({
//   components: { sxProgress, sxButton },
//   template: `
//     <div style="width: 200px">
//       <div>等待开发</div>
//       <sx-progress :percent="percent" style=" margin: 5px" showInfo></sx-progress>
//       <sx-button icon="chevron_left" @click="percentSub"></sx-button>
//       <sx-button icon="chevron_right" @click="percentAdd"></sx-button>
//     </div>
//   `,
//   setup() {
//     const percent = ref(10)
//     const percentSub = () => {
//       percent.value -= 10;
//     }
//     const percentAdd = () => {
//       percent.value += 10;
//     }

//     return { percent, percentAdd, percentSub }
//   }
// })

const centerTemplate = () => ({
  components: { sxProgress },
  template: `
    <div>
      <sx-progress :percent="10" type="circle" text="doing" style=" margin: 5px "></sx-progress>
      <sx-progress :percent="100" type="circle" text="done" style=" margin: 5px "></sx-progress>
    </div>
  `,
  setup() {
  }
})

export const base = baseTemplate.bind({});
base.storyName = '标准的进度条'

export const text = textTemplate.bind({});
text.storyName = '展示百分比文本'

export const direction = directionTemplate.bind({});
direction.storyName = '垂直的进度条'

export const circle = circleTemplate.bind({});
circle.storyName = '环形进度条'

export const small = smallTemplate.bind({});
small.storyName = '小号的环形进度条'

// export const setPercent = setPercentTemplate.bind({});
// setPercent.storyName = '动态改变进度'

export const center = centerTemplate.bind({});
center.storyName = '中心文字'