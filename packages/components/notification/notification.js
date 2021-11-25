import Notification from './notification.vue'
import NotificationWrapper from './notificationWrapper.vue'
import {
  createApp
} from 'vue'

let instance;
let instances = [];
let seed = 0;

//挂载父节点
const root = createApp(NotificationWrapper);
const parent2 = document.createElement('div');
const instance2 = root.mount(parent2);
document.body.appendChild(instance2.$el)

const sxNotification = function (options) {
  console.log('options', options);

  const position = options.position || 'top-right';
  options.seed = seed;
  instances.push(instance)

  //校验位置
  let verticalOffset = options.offset || 0;

  // instances.forEach(item => {
  //   verticalOffset += item.$el.offsetHeight + 16;
  // })
  options.verticalOffset = verticalOffset;

  //获取组件
  const app = createApp(Notification);


  console.log('app', app);

  //传入data
  app._component.options = options;
  //创建祖节点
  const parent = document.createElement('div');;
  //挂载未挂载的组件

  instance = app.mount(parent);
  document.body.appendChild(instance.$el)
}

export default sxNotification;