import {App} from 'vue'

type ComponentType = any

export interface SxUiInstance {
  componentPrefix: string
  install: (app: App) => void
}

interface SxUiCreateOptions{
  componentPrefix?:string
  components?:ComponentType[]
}


function create({componentPrefix = 'sx',components = []}:SxUiCreateOptions={}): SxUiInstance{
  const installTargets: App[] = []

  function registerComponent(app:App,name:string,component:ComponentType):void{
    const registered = app.component(componentPrefix+name)
    
    if (!registered) {
      app.component(componentPrefix+name,component)
    }
  }

  function install(app:App):void{
    if (installTargets.includes(app)) return
    installTargets.push(app)
    components.forEach((component) => {
      const { name } = component
      registerComponent(app,name,component)
    })
  }
  return {
    componentPrefix,
    install
  }
}

export default create