//全局注册组件

import * as components from './components/index'
import create from './create'

export default create({
  components:Object.keys(components).map(
    (key)=>components[key as keyof typeof components]
  )
})