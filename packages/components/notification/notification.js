import Notification from './notification.vue'
import NotificationWrapper from './notificationWrapper.vue'
import {
  createApp
} from 'vue'

let instance;
let instances = [];
let positions = [];
let seed = 0;

const sxNotification = function (options) {

  const position = options.position || 'topRight';
  const duration = options.duration || 3;
  options.seed = seed;
  options.position = position;
  options.duration = duration;
  instances.push(instance)

  if (!positions.includes(position)) {
    //挂载父节点
    const root = createApp(NotificationWrapper);
    root._component.options = options;
    const parentRoot = document.createElement('div');
    const instanceRoot = root.mount(parentRoot);
    document.body.appendChild(instanceRoot.$el)
  }

  positions.push(position)

  //获取组件
  const app = createApp(Notification);

  //传入data
  app._component.options = options;

  //创建祖节点
  const parent = document.createElement('div');;
  //挂载未挂载的组件

  instance = app.mount(parent);
  document.body.appendChild(instance.$el)
}

export default sxNotification;